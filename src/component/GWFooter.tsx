import { color } from "@/app/theme";
import Image from "next/image";
import icon from "../../public/gateway_icon.png";
import Link from "next/link";

export function GWFooter() {
  return (
    <div
      style={{
        width: "100vw",
        height: 700,
        backgroundColor: color.header,
        padding: "70px 50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{}}></div>
      <div
        style={{
          width: "calc(100vw - 100px)",
          maxWidth: 1440,
          height: 1,
          background: "white",
        }}
      />
      <div
        style={{
          paddingTop: 70,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "calc(100vw - 100px)",
          maxWidth: 1440,
        }}
      >
        <div>
          <Image
            src={icon}
            height={180}
            width={180}
            alt={"Gateway icon"}
            style={{ backgroundColor: "white", marginBottom: 50 }}
          />
          <div style={{ fontSize: 18 , fontFamily: "Arial", color: "#3A3B40"}}>
            2023 © copyright <br />
            All rights reserved.
          </div>
        </div>

        <div style={{}}>
          <div style={{fontSize: 36, fontFamily: "Arial", marginBottom: 45}}>Navigation</div>
          <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
            <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>Home</div>
          </Link>
          <div></div>
          <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
            <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>About us</div>
          </Link>
          <Link
            href={"/articles"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>Articles</div>
          </Link>
          <Link
            href={"/event"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>Event</div>
          </Link>
          <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
            <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>Contacts Us</div>
          </Link>
        </div>

        <div style={{}}>
          <div style={{fontSize: 36, fontFamily: "Arial", marginBottom: 45}}>Contact Us</div>
          <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>
            Address: Level 1,
            <br />
             139 Nguyen Duc Canh,
            <br />
             Tan Phong,
            <br />
            District 7,
            <br />
            Ho Chi Minh City,
          </div>
          <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>Email : Info@gateway-vn.com</div>
          <div style={{fontSize: 24,  fontFamily: "Arial", color: "#3A3B40", marginBottom: 18}}>
            Phone : +84-0938547603
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
