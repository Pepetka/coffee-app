import productImg from "../../resources/img/section-about/goods-card.png"
import { createServer, Model, Factory } from "miragejs"

createServer({
	models: {
		coffee: Model,
	},

	factories: {
		coffee: Factory.extend({
			name() {
				const random = Math.floor(Math.random() * (2 - 0 + 1), 2) + 0,
					arr = ["Solimo", "Presto", "AROMISTICO"]

				return `${arr[random]} Coffee${arr[random] === "AROMISTICO" ? "" : " Beans"} ${
					random + 1
				} kg`
			},

			country() {
				const random = Math.floor(Math.random() * (2 - 0 + 1), 2) + 0,
					arr = ["Brazil", "Kenya", "Columbia"]

				return arr[random]
			},

			price() {
				const random = Math.floor(Math.random() * (20 - 6 + 1), 2) + 6

				return `${random}$`
			},

			productImg() {
				return productImg
			},

			description() {
				return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet enim laboriosam molestiae ipsam quibusdam reiciendis voluptatem ratione minus illo totam."
			},
		}),
	},

	seeds(server) {
		server.createList("coffee", 17)
	},

	routes() {
		this.namespace = "api"
		this.get("/coffee", { timing: 2000 })
		this.get("/coffee/:id", { timing: 2000 })
	},
})
