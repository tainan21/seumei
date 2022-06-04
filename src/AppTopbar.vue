<template>
	<div class="layout-topbar">
		<router-link to="/" class="layout-topbar-logo">
			<svg viewBox="0 0 124.000000 152.000000" preserveAspectRatio="xMidYMid meet" fill="none" >
			<g id="BG" transform="translate(0.000000,152.000000) scale(0.100000,-0.100000)" enable-background="none" rect="none">
				<path id="BGElement" d="M484 1510 c-228 -41 -387 -181 -456 -400 -20 -65 -23 -95 -23 -225 1 -170 14 -237 70 -350 71 -145 306 -416 421 -485 49 -29 67 -35 118 -35 93 0 142 29 271 159 185 186 292 345 332 496 25 92 24 330 -1 420 -40 144 -141 283 -251 344 -97 54 -189 78 -315 82 -63 1 -138 -1 -166 -6z m-179 -733 c111 -66 239 -242 252 -345 5 -45 3 -51 -17 -62 -59 -32 -193 14 -281 97 -105 98 -135 253 -60 310 21 16 80 16 106 0z m749 -18 c36 -43 36 -124 1 -196 -50 -99 -176 -189 -280 -200 -71 -7 -95 7 -95 56 0 83 127 274 225 339 65 43 113 44 149 1z m-332 -561 c-20 -20 -33 -23 -102 -23 -69 0 -82 3 -102 23 l-22 22 124 0 124 0 -22 -22z"
				fill="#E6E6E6"/>
			</g>
			</svg>
    		<p class="bartopMenu">Idefood</p>
		</router-link>
		<button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
			<i class="pi pi-bars"></i>
		</button>

		<button class="p-link layout-topbar-menu-button layout-topbar-button"
			v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', 
			leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}">
			<i class="pi pi-ellipsis-v"></i>
		</button>
		<ul class="layout-topbar-menu hidden lg:flex origin-top">
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-calendar"></i>
					<span>Events</span>
				</button>
			</li>
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-cog"></i>
					<span>Settings</span>
				</button>
			</li>
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-user"></i>
					<span>Profile</span>
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);
        },
		onTopbarMenuToggle(event) {
            this.$emit('topbar-menu-toggle', event);
        },
		topbarImage() {
			return this.$appState.darkTheme ? 'images/logo-white.svg' : 'images/logo-dark.svg';
		}
    },
	computed: {
		darkTheme() {
			return this.$appState.darkTheme;
		}
	}
}
</script>

