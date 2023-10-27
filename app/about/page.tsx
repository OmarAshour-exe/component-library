import {Checkbox} from "@/components/checkbox/Checkbox"
import {css} from "@/styled-system/css"
import NextBreadcrumb from "@/components/breadcrumbs/Breadcrumbs";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <div>
                <NextBreadcrumb
                    homeElement={'Startseite'}
                    separator={<span> {"/"} </span>}
                    capitalizeLinks/>
                <Link legacyBehavior href={"/"}><a>Go back to Startseite</a></Link>
                <div className={css({fontSize: "2xl", fontWeight: "bold"})}>Hello 🐼!</div>
                <Checkbox label={"Woooow"} disabled={false}></Checkbox>
            </div>
        </div>
    )
}
