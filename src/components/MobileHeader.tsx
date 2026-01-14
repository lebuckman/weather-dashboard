import type { Dispatch, SetStateAction } from "react";
import Hamburger from "/src/assets/hamburger.svg?react";
import LightDarkToggle from "./LightDarkToggle";

type Props = {
    setIsSidePanelOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MobileHeader({ setIsSidePanelOpen }: Props) {
    return (
        <div className="w-full h-18 p-4 bg-background sticky top-0 xs:hidden flex gap-8 justify-between items-center z-1001">
            <LightDarkToggle />
            <button onClick={() => setIsSidePanelOpen(true)}>
                <Hamburger className="size-12" />
            </button>
        </div>
    );
}
