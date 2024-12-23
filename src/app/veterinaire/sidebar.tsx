import { AdminSidebarItem } from "@/components/common/SidebarItem"
import { ModeToggle } from "@/components/ui/mode-toggle"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
} from "@/components/ui/sidebar"

export const VeterinaireSidebar = () => {
	return (
		<Sidebar>
			<SidebarHeader className="text-center font-bold text-xl">
				Arcadia pour Vétérinaire
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							<AdminSidebarItem href="/veterinaire/rapports" text="Rapports" />
							<AdminSidebarItem href="/veterinaire/avis" text="Avis" />
							<AdminSidebarItem
								href="/veterinaire/nourriture"
								text="Nourriture"
							/>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<div className="mx-auto">
					<ModeToggle />
				</div>
			</SidebarFooter>
		</Sidebar>
	)
}
