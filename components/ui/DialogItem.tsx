"use client";
import React from "react";
import { Dialog, DialogContent, DialogPortal, DialogTrigger } from "./dialog";
import { DropdownMenuItem } from "./dropdown-menu";

interface DialogItemProps {
	triggerChildren: React.ReactNode;
	children: React.ReactNode;
	onSelect?: () => void;
	onOpenChange?: (open: boolean) => void;
	[key: string]: any;
}

const DialogItem = React.forwardRef<HTMLDivElement, DialogItemProps>((props, forwardedRef) => {
	const { triggerChildren, children, onSelect, onOpenChange, ...itemProps } = props;
	return (
		<Dialog onOpenChange={onOpenChange}>
			<DialogTrigger asChild>
				<DropdownMenuItem
					{...itemProps}
					ref={forwardedRef}
					className="DropdownMenuItem"
					onSelect={(event) => {
						event.preventDefault();
						onSelect && onSelect();
					}}>
					{triggerChildren}
				</DropdownMenuItem>
			</DialogTrigger>
			<DialogPortal>
				<DialogContent className="DialogContent sm:max-w-[425px]">{children}</DialogContent>
			</DialogPortal>
		</Dialog>
	);
});

export default DialogItem;
