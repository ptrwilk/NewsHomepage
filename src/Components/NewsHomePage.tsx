import {
  Box,
  Button,
  Drawer,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material";
import styles from "./styles.module.css";
import ImageWebMobile from "../assets/image-web-3-mobile.jpg";
import ImageWebDesktop from "../assets/image-web-3-desktop.jpg";
import ImageRetro from "../assets/image-retro-pcs.jpg";
import ImageTop from "../assets/image-top-laptops.jpg";
import ImageGaming from "../assets/image-gaming-growth.jpg";
import Logo from "../assets/logo.svg";
import ImageMenu from "../assets/icon-menu.svg";
import ImageMenuClose from "../assets/icon-menu-close.svg";
import { useState } from "react";

const NewsHomePage = () => {
  const isMedium = useMediaQuery("(min-width : 600px)");

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box className={styles["container"]}>
      {!isMedium && (
        <Drawer anchor="right" open={menuOpen}>
          <Box className={styles["drawer-container"]}>
            <Button
              className={styles["btn-menu-close"]}
              onClick={() => setMenuOpen(false)}
            >
              <img className={styles["img-menu-close"]} src={ImageMenuClose} />
            </Button>
            <Menu />
          </Box>
        </Drawer>
      )}
      <Box className={styles["heading"]}>
        <img className={styles["img-logo"]} src={Logo} />
        {!isMedium && (
          <Button
            className={styles["btn-menu"]}
            onClick={() => setMenuOpen(true)}
          >
            <img src={ImageMenu} />
          </Button>
        )}
        {isMedium && <Menu />}
      </Box>
      <Box className={styles["article"]}>
        <img
          className={styles["img-web"]}
          src={isMedium ? ImageWebDesktop : ImageWebMobile}
        />
        <Typography className={styles["title"]} variant="h1">
          The Bright Future of Web 3.0?
        </Typography>
        <Box className={styles["content"]}>
          <Typography className={styles["text"]}>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </Typography>
          <Button className={styles["btn"]}>Read more</Button>
        </Box>
      </Box>
      <Box className={styles["new"]}>
        <Typography className={styles["title"]}>New</Typography>
        <Box className={styles["new-contents"]}>
          <NewContent
            title="Hydrogen VS Electric Cars"
            text="Will hydrogen-fueled cars ever catch up to EVs?"
          />
          <Divider />
          <NewContent
            title="The Downsides of AI Artistry"
            text="What are the possible adverse effects of on-demand AI image generation?"
          />
          <Divider />
          <NewContent
            title="Is VC Funding Drying Up?"
            text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
          />
        </Box>
      </Box>
      <Box className={styles["facts"]}>
        <Fact
          img={ImageRetro}
          number="01"
          title="Reviving Retro PCs"
          text="What happens when old PCs are given modern upgrades?"
        />
        <Fact
          img={ImageTop}
          number="02"
          title="Top 10 Laptops of 2022"
          text="Our best picks for various needs and budgets."
        />
        <Fact
          img={ImageGaming}
          number="03"
          title="The Growth of Gaming"
          text="How the pandemic has sparked fresh opportunities."
        />
      </Box>
    </Box>
  );
};

const Menu = () => (
  <Box className={styles["menu"]}>
    <Typography className={styles["item"]}>Home</Typography>
    <Typography className={styles["item"]}>New</Typography>
    <Typography className={styles["item"]}>Popular</Typography>
    <Typography className={styles["item"]}>Trending</Typography>
    <Typography className={styles["item"]}>Categories</Typography>
  </Box>
);

const NewContent = ({ title, text }: { title: string; text: string }) => (
  <Box className={styles["new-content"]}>
    <Typography className={styles["title"]} variant="h2">
      {title}
    </Typography>
    <Typography className={styles["text"]}>{text}</Typography>
  </Box>
);

const Fact = ({
  img,
  number,
  title,
  text,
}: {
  img: any;
  number: string;
  title: string;
  text: string;
}) => (
  <Box className={styles["fact"]}>
    <img className={styles["img"]} src={img} />
    <Box className={styles["content"]}>
      <Typography className={styles["number"]} variant="h1">
        {number}
      </Typography>
      <Typography className={styles["title"]} variant="h2">
        {title}
      </Typography>
      <Typography className={styles["text"]}>{text}</Typography>
    </Box>
  </Box>
);

export default NewsHomePage;
