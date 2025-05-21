import { useRef, useState } from "react";
import { Avatar, Rating } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { Button } from "react-bootstrap";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const messages = [
  {
    message: "We've seen a huge boost in productivity since adopting this tool. It's intuitive and fits perfectly into our workflow.",
    author_name: "Emily Carter",
    author_more_info: "Product Manager, TS Tech"
  },
  {
    message: "This solution simplified our data analysis process significantly. The interface is clean and support has been outstanding.",
    author_name: "James Robinson",
    author_more_info: "Lead Data Analyst, Harbor Analytics"
  },
  {
    message: "I was skeptical at first, but this platform has proven to be incredibly reliable and user-friendly for our remote team.",
    author_name: "Sophia Bennett",
    author_more_info: "Operations Director, ClearPath Solutions"
  },
  {
    message: "As a growing startup, we needed something scalable and flexible. This exceeded our expectations in every way.",
    author_name: "Michael Turner",
    author_more_info: "CEO, NovaStream Inc."
  }
];

export default function AppCarouselTestimony() {
  const carousel = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = 320; // ajuste se necessário conforme o CSS real

  const nextSlide = () => {
    if (currentIndex < messages.length - 1) {
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
      <div className="Carousel" ref={carousel}>
        <div
          className="Inner"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}px)`,
            transition: "transform 0.5s ease"
          }}
        >
          {messages.map((message, i) => (
            <div className="Item" key={i}>
              <Rating name="half-rating" defaultValue={3} precision={1} />
              <p className="message">{message.message}</p>
              <div className="author-info">
                <Avatar className="avatar"><PermMediaIcon /></Avatar>
                <div className="author">
                  <strong className="author-name">{message.author_name}</strong>
                  <span className="author-more-info">{message.author_more_info}</span>
                </div>
              </div>
              <br />
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
