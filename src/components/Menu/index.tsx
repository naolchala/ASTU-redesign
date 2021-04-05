import React, { ReactNode, useRef, useState } from "react";
import { FC } from "react";
import { MdChevronRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

interface IMenu {
	open: boolean;
}
interface ILinkGroup {
	children?: ReactNode;
	reCalculate?: (el: HTMLDivElement) => void;
	label: string;
}
interface ILink {
	children?: ReactNode;
	href: string;
}

const Menu: FC<IMenu> = ({ open }: IMenu) => {
	return (
		<CSSTransition in={open} timeout={10}>
			<div className="mob-menu">
				<LinkGroup label="Latest">
					<Link href="/">News</Link>
					<Link href="/">Upcoming Events</Link>
					<Link href="/">ASTU Visitors</Link>
					<Link href="/">Archive News</Link>
				</LinkGroup>
				<LinkGroup label="About ASTU">
					<LinkGroup label="Administration">
						<Link href="/">
							Procurement and Property Administration{" "}
						</Link>
						<Link href="/">
							{" "}
							Human Resource Management Directorate
						</Link>
					</LinkGroup>
				</LinkGroup>

				<LinkGroup label="Academics"></LinkGroup>
				<LinkGroup label="Admission"></LinkGroup>
				<LinkGroup label="Research"></LinkGroup>
				<LinkGroup label="Offices"></LinkGroup>
				<LinkGroup label="Linkages"></LinkGroup>
				<LinkGroup label="Annoucements"></LinkGroup>
			</div>
		</CSSTransition>
	);
};

const LinkGroup: FC<ILinkGroup> = ({ children, label }: ILinkGroup) => {
	const [opened, setOpened] = useState(false);
	const [height, setHeight] = useState(0);
	const container = useRef<HTMLDivElement>(null);

	const calcHeight = (el: HTMLDivElement) => {
		if (opened) {
			setHeight(el.offsetHeight);
		} else {
			setHeight(0);
		}
	};

	return (
		<div className="link-group">
			<div
				onClick={() => setOpened(!opened)}
				className={`link ddown ${opened ? "active" : null}`}>
				{label}
				<span className="flex-1"></span>
				<MdChevronRight
					className={`arrow ${opened ? "active" : null}`}
				/>
			</div>

			<div className="links-container" style={{ height }} ref={container}>
				<CSSTransition
					in={opened}
					unmountOnExit
					timeout={0}
					onEnter={(el: any) => calcHeight(el)}
					onExit={(el: any) => calcHeight(el)}>
					<div>{children}</div>
				</CSSTransition>
			</div>
		</div>
	);
};

const Link: FC<ILink> = ({ href, children }: ILink) => {
	return (
		<NavLink to={href} className="link">
			{children}
		</NavLink>
	);
};

export { Menu };
