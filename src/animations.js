export const panelAnim = {
	hidden: {
		width: 0,
	},
	show: {
		width: 400,
		transition: {
			duration: 1,
			ease: "easeInOut",
			delay: 0.5
		}
	}
}

export const navAnim = {
	hidden: {
		opacity: 0
	},
	show: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeOut",
			delay: 1.75
		}
	}
}

export const citiesAnim = {
	hidden: {
		opacity: 0,
		y: -50
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .5,
			ease: "easeOut",
			delay: 2
		}
	}
}

export const footerAnim = {
	hidden: {
		opacity: 0,
		y: 150
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: "easeOut",
			delay: 1.5
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0,
			ease: "easeOut",
			delay: 0.25
		}
	}
}

// PAGE ANIMATION
export const pageAnim = {
	hidden: {
		opacity: 0,
		y: 300
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: "easeOut",
			delay: 0.25
		}
	},
	exit: {
		opacity: 0,
		y: 300,
		transition: {
			duration: 1,
			ease: "easeOut",
			delay: 0.25
		}
	}
}