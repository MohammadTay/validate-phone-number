import { Box, Stack, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/core";
import newRequest from "../utils/newRequest";
import { nanoid } from "@reduxjs/toolkit";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [costumers, setCostumers] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  useEffect(() => {
    const getCostumers = async () => {
      try {
        const { data } = await newRequest.get("/user/costumers");
        setCostumers(data);
      } catch (err) {
        console.log(err);
      }
    };
    getCostumers();
  }, []);
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1} key={nanoid}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <Swiper
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          style={{ width: "800px", height: "800px" }}
          modules={[EffectCoverflow]}
        >
          {costumers.map((item, key) => (
            <SwiperSlide key={item.id}>
              <Post item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default Feed;
