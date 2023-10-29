import {Checkbox} from "@/components/checkbox/Checkbox"
import {css} from "@/styled-system/css"
import NextBreadcrumb from "@/components/breadcrumbs/Breadcrumbs";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

export default function Page() {
    return (
        <div>

            <NextBreadcrumb
                homeElement={'Startseite'}
                separator={<span> {"/"} </span>}
                capitalizeLinks/>
            <Link legacyBehavior href={"/"}><a>Go back to Startseite</a></Link>
            <div className={css({fontSize: "2xl", fontWeight: "bold"})}>Hello 🐼!</div>
            <Checkbox label={"Woooow"} disabled={false}></Checkbox>
            <Footer text={"What an incredible day. This is about page."}/>
        </div>
    )
}
