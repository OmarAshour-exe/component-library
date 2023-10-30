import {Checkbox} from "@/components/checkbox/Checkbox"
import {css} from "@/styled-system/css"
import NextBreadcrumb from "@/components/breadcrumbs/Breadcrumbs";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Accordion from "@/components/accordion/Accordion";

const str = "ich bin content für die Accordion"

export default function Home() {
    return (
        <div>
            <NextBreadcrumb
                homeElement={'Startseite'}
                separator={<span> {"/"} </span>}
                capitalizeLinks/>
            <Link legacyBehavior href="/about">Go to about</Link>
            <div className={css({fontSize: "2xl", fontWeight: "bold"})}>Hello 🐼!</div>
            <Checkbox label={"Woooow"} disabled={false}></Checkbox>
            <Accordion title={"Title"} content={str}></Accordion>
            <Footer text={"What an incredible day. This is Startseite page."}/>
        </div>
    )
}
