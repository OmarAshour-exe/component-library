import { Checkbox } from "@/components/checkbox/Checkbox"
import { css } from "@/styled-system/css"
import NextBreadcrumb from "@/components/breadcrumbs/Breadcrumbs";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Accordion from "@/components/accordion/Accordion";
import Collapse from "@/components/collapse/Collapse";
import Dropdown from "@/components/dropdown/Dropdown";

const items = [
    {
        title: "Accordion Section 1",
        child: "This is the content of section 1"
    },
    {
        title: "Accordion Section 2",
        child: "This is the content of section 2"
    },
    {
        title: "Accordion Section 3",
        child: "This is the content of section 3"
    }
]
  
export default function Home() {
    return (
        <div>
            <NextBreadcrumb
                homeElement={'Startseite'}
                separator={<span> {"/"} </span>}
                capitalizeLinks />
            <Link href="/about">Go to about</Link>
            <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>Hello 🐼!</div>
            <Checkbox label={"Woooow"} disabled={false}></Checkbox>
            <Collapse title={"Collapse"}>Heeeeeeeeeeey ich bin die Content von Collapse</Collapse>
            <Accordion items={items} />
            <Dropdown></Dropdown>
            <Footer text={"What an incredible day. This is Startseite page."} />
        </div>
    )
}
