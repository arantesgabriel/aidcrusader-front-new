import { useRef, useState } from "react";
import { Avatar } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, Container } from "react-bootstrap";

const images = [
  {
    image: "https://picsum.photos/600/300",
    title: "Clean Water for Flint",
    created_by: "John Walker",
    desc: "Help us provide clean, safe drinking water to families in Flint, Michigan.",
    donation_value: "US$ 23.750",
    donation_count: 90
  },
  {
    image: "https://picsum.photos/600/300",
    title: "Backpacks for Kids",
    created_by: "Lucca Gasparinni",
    desc: "We're giving away school supplies to underprivileged children across the U.S.",
    donation_value: "US$ 12.400",
    donation_count: 65
  },
  {
    image: "https://picsum.photos/600/300",
    title: "Veterans' Housing",
    created_by: "Emilia Jackson",
    desc: "Help us build transitional housing for homeless veterans in California.",
    donation_value: "US$ 31.980",
    donation_count: 110
  },
  {
    image: "https://picsum.photos/600/300",
    title: "Disaster Relief Fund",
    created_by: "Lucy Allen",
    desc: "Immediate aid for families affected by recent hurricanes in the southern U.S.",
    donation_value: "US$ 45.000",
    donation_count: 132
  }
];

export default function AppCarouselCampaign() {
  const carousel = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = 340; // largura estimada de um item com margem

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
    <div className="Container position-relative">
      {/* Carrossel */}
      <div className="Carousel" ref={carousel}>
        <div
          className="Inner"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}px)`,
            transition: "transform 0.5s ease"
          }}
        >
          {images.map((image, i) => (
            <div className="Item Item-campaign" key={i}>
              <img
                src={image.image}
                alt={`Campanha ${i + 1}`}
                className="img-fluid mb-3 rounded"
                style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
              />
              <div className="title">{image.title}</div>
              <div className="created-by fst-italic">
                Created by <strong>{image.created_by}</strong>
              </div>
              <div className="campaign-body">
                <p className="desc">{image.desc}</p>
                <div className="bottom-campaign">
                  <div className="donations d-flex align-items-end">
                    <Avatar sx={{ marginRight: 2 }}>
                      <PermMediaIcon />
                    </Avatar>
                    <span className="values w-75 mb-2">
                      {image.donation_value} • {image.donation_count} donations
                    </span>
                  </div>
                  <Button
                    className="fw-bold"
                    style={{
                      width: "100%",
                      backgroundColor: "#F7C728",
                      color: "black",
                      border: "#F7C728 solid"
                    }}
                  >
                    Donate
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        
    </div>
    <div
      className="mt-4 align-center justify-center w-100"
      style={{
        marginTop: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}
    >
      {/* Botão esquerdo com ícone */}
      <Button
        className="rounded-circle next-prev"
        variant="outline-primary"
        onClick={prevSlide}
        style={{
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" className="w-100" />
      </Button>

      {/* Botão central */}
      <Button
        className="all-campaigns-btn button-donate w-25"
        variant="contained"
        color="primary"
      >
        All Campaigns
      </Button>

      {/* Botão direito com ícone */}
      <Button
        className="rounded-circle next-prev"
        variant="outline-primary"
        onClick={nextSlide}
        style={{
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ArrowForwardIosIcon fontSize="small" className="w-100" />
      </Button>
    </div>
    </>
  );
}
