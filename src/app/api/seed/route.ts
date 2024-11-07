import { prismaClient } from "@/utils"

export async function GET() {
	const services = await prismaClient.service.createMany({
		data: [
			{
				nom: "Restauration",
				description:
					"Déjeunez au restaurant du Zoo Arcadia, proposant des plats savoureux à base de produits locaux et biologiques, pour une pause gourmande au cœur de la nature.",
			},
			{
				nom: "Exploration Guidée",
				description:
					"Participez gratuitement à des visites guidées des habitats, menées par nos experts passionnés, pour tout apprendre sur nos animaux et leurs environnements naturels.",
			},
			{
				nom: "Safari en Petit Train",
				description:
					"Embarquez dans notre petit train pour une visite unique et relaxante du zoo, permettant d’observer les animaux de plus près tout en profitant du confort d’un trajet accompagné.",
			},
			{
				nom: "Aire de Pique-nique Verte",
				description:
					"Profitez de notre espace de pique-nique écoresponsable, aménagé avec des tables en bois recyclé et des zones de tri sélectif, pour une pause repas au cœur de la nature.",
			},
			{
				nom: "Atelier Jeune Explorateur",
				description:
					"Un espace spécialement conçu pour les enfants, où ils peuvent participer à des activités ludiques et éducatives pour mieux comprendre le monde animal et l’importance de sa préservation.",
			},
			{
				nom: "Spectacles et Animations Nature",
				description:
					"Assistez à des démonstrations et animations captivantes sur la vie animale et la conservation, pour un moment éducatif et divertissant à partager en famille.",
			},
		],
	})

	const habitats = {
		savaneAfricaine: await prismaClient.habitat.create({
			data: {
				nom: "Savane Africaine",
				description:
					"Un vaste espace avec des paysages ouverts, typiques de la savane africaine.",
				images: {
					create: [
						{
							url: "https://img.freepik.com/photos-gratuite/champ-couvert-verdure-entoure-zebres-sous-lumiere-du-soleil-ciel-bleu_181624-18150.jpg?t=st=1730982470~exp=1730986070~hmac=2379582608361a80c67506aa0d2c6552e90b0147ad001c140fcba6502da70468&w=1380",
						},
						{
							url: "https://img.freepik.com/photos-gratuite/gros-plan-elephant-mignon-marchant-herbe-seche-dans-desert_181624-25714.jpg?t=st=1730984642~exp=1730988242~hmac=f7eb6024fa47e1da9104340a196c54071cd8c26ffc60f84dfd028d64fd6c633e&w=1380",
						},
					],
				},
				animaux: {
					create: [
						{
							prenom: "Simba",
							race: "Lion",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/lion-allonge-sol-sous-lumiere-du-soleil-surface-floue_181624-48519.jpg?t=st=1730987003~exp=1730990603~hmac=e28689fc65b72cb1cdf29e0c4ebe0d4f37ba63f3c66e56f09b158fc65ecaab83&w=1800",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/lions-males-reposant-sol_181624-10541.jpg?t=st=1730984707~exp=1730988307~hmac=df623fdf2b75df7d1d3ed76b36c711eac405cd4998d956a5525a407d25136988&w=1380",
									},
								],
							},
						},
						{
							prenom: "Zara",
							race: "Éléphant",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/bel-elephant-chemin-gravier-entoure-herbe-verte-arbres_181624-23979.jpg?t=st=1730987050~exp=1730990650~hmac=6a8c757b4a25e8cb7f1a9fe1e2236b4d7400f778d46e953b9ce1d22a1740c27f&w=1800",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/gros-plan-elephants-approchant-du-lac-arbres_181624-28004.jpg?t=st=1730984764~exp=1730988364~hmac=f9233fc1984271549b7e8fea38a0f10716a42871bc3b9ce5ac48febc40852987&w=1380",
									},
								],
							},
						},
						{
							prenom: "Rafiki",
							race: "Girafe",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/gros-plan-girafe-paissant-dans-jungle-capturee-au-kenya-nairobi-samburu_181624-8398.jpg?t=st=1730987076~exp=1730990676~hmac=e836feb9ac3eb27f752d9a744bc91b6ebf59c32182685056c8be827b1f9a7fe5&w=1800",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/troupeau-girafes-savane_155003-6499.jpg?t=st=1730984796~exp=1730988396~hmac=d17bad3dc41d0756828e3544d1a69236254ac5cce607b9c327189222875f5e96&w=1380",
									},
								],
							},
						},
					],
				},
			},
		}),
		jungleTropicale: await prismaClient.habitat.create({
			data: {
				nom: "Jungle Tropicale",
				description:
					"Une forêt dense et humide abritant des espèces exotiques.",
				images: {
					create: [
						{
							url: "https://img.freepik.com/photos-gratuite/vue-foret-tropicale-luxuriante-verte-au-costa-rica_23-2148248823.jpg?t=st=1730982519~exp=1730986119~hmac=26a4c72f7b739042bcfe678148812de21eab77d734d8f946ccd2fc6cae82f7b2&w=1380",
						},
						{
							url: "https://img.freepik.com/photos-gratuite/belle-photo-etang-au-milieu-foret_181624-19638.jpg?t=st=1730984822~exp=1730988422~hmac=9a2f5ca31274d3f0c394e7b6b1fbb79c4a96bded9e910eea3b0d26d198b9ccaf&w=1380",
						},
					],
				},
				animaux: {
					create: [
						{
							prenom: "Koko",
							race: "Gorille",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/rendez-vous-3d-du-portrait-du-gorille_23-2151270748.jpg?t=st=1730984846~exp=1730988446~hmac=f7d1321faeb66063f5cb920698cce097f29507b438fb585f5e83e6e08e46003f&w=1380",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/rendez-vous-3d-du-portrait-du-gorille_23-2150536659.jpg?t=st=1730984879~exp=1730988479~hmac=6f23df4d52790ae445c52e547b6e534602720d5b7a77c740c64898cc49dd76d3&w=1380",
									},
								],
							},
						},
						{
							prenom: "Rio",
							race: "Ara bleu",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/capture-ecran-perroquet-bleu-jaune_181624-40963.jpg?t=st=1730984921~exp=1730988521~hmac=10727c57356a5edb51d184d720f6f9d9c5c7a1c241c252ef415aae9f0524b152&w=996",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/ara-hyacinthe-palmier-dans-habitat-naturel_475641-1091.jpg?t=st=1730984942~exp=1730988542~hmac=5c6ce43f40ebe630e26e4d893342192b4694241f41b8b321608e6bdf3925a4c0&w=1380",
									},
								],
							},
						},
						{
							prenom: "Sasha",
							race: "Panthère",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/leopard-assombri-se-dirige-vers-ombres-lumiere_475641-587.jpg?t=st=1730984961~exp=1730988561~hmac=065c43ad64c99107bf33586e48be580824604a00fbf0b9079943f01c01e50c61&w=1380",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/jaguar-americain-dans-habitat-naturel-jungle-sud-americaine_475641-1059.jpg?t=st=1730984992~exp=1730988592~hmac=3a5a30388c5ae722422497625df283690e35b3b825d1ba1b2847bf9ad820a736&w=1380",
									},
								],
							},
						},
					],
				},
			},
		}),
		maraisExotiques: await prismaClient.habitat.create({
			data: {
				nom: "Marais Exotiques",
				description:
					"Un écosystème humide pour des animaux aquatiques et semi-aquatiques.",
				images: {
					create: [
						{
							url: "https://img.freepik.com/photos-gratuite/beau-paysage_8327-182.jpg?t=st=1730982563~exp=1730986163~hmac=8796cbe2df78442d847f3564fe7c33af5bdda955129eec024dbb47ae9a23b932&w=1380",
						},
						{
							url: "https://img.freepik.com/photos-gratuite/arbres-entourant-eau-pendant-journee_181624-31801.jpg?t=st=1730985045~exp=1730988645~hmac=d73b824e890960a2a4140a92345e6d22a77f2d756a5fe9617a9e66aad5a6baa4&w=1380",
						},
					],
				},
				animaux: {
					create: [
						{
							prenom: "Chomp",
							race: "Crocodile",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/gros-crocodile-dans-parc-national-du-kenya-afrique_167946-41.jpg?t=st=1730985079~exp=1730988679~hmac=e13ba81a1052cebcb56b7917e15aa2024bbbd316963c5b34f8ed3c8ae02787fa&w=1380",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/caiman-sauvage-du-poisson-dans-bouche-dans-habitat-naturel-bresil-sauvage-faune-bresilienne-pantanal-jungle-verte-nature-sud-americaine-sauvage-dangereux_475641-2231.jpg?t=st=1730985073~exp=1730988673~hmac=6acfabe36d9b94d15d996074f7480abce4b92b329866e7d069d0959fedd8ff5a&w=1380",
									},
								],
							},
						},
						{
							prenom: "Bubbles",
							race: "Hippopotame",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/tete-hippopotame-attend-nourriture-dans-riviere_488145-912.jpg?t=st=1730985128~exp=1730988728~hmac=6d827c9f5e2b2ade15ef5ff2329f0725a1409ebf8b9ab3a7d4e1b4815901a4ff&w=1380",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/famille-hippopotames-dans-parc-national-du-kenya-afrique_167946-43.jpg?t=st=1730985160~exp=1730988760~hmac=0527312bf721beb68eb5093c0ec424140805898da0c01f9b57ecaa225332d338&w=1380",
									},
								],
							},
						},
						{
							prenom: "Splash",
							race: "Flamant rose",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/gros-plan-flamant-rose-reposant-sa-tete-dos_181624-14939.jpg?t=st=1730985200~exp=1730988800~hmac=a03894ff1564ae8821e429480aead2c10c797f3c52867d3f4fe65321a9f34ccb&w=1380",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/flamand-se-boucle-forme-elegante_157027-4135.jpg?t=st=1730985225~exp=1730988825~hmac=2c9928bb8e10410baab2f67224c28371ba9693a8fb41d34fa109ba03b2b0f09b&w=1380",
									},
								],
							},
						},
					],
				},
			},
		}),
		plaineNordique: await prismaClient.habitat.create({
			data: {
				nom: "Plaine Nordique",
				description:
					"Un environnement froid et rocheux pour les animaux des climats nordiques.",
				images: {
					create: [
						{
							url: "https://img.freepik.com/photos-gratuite/paysage-collines-couvertes-forets-neige-sous-lumiere-du-soleil-pendant-journee_181624-24871.jpg?t=st=1730982615~exp=1730986215~hmac=39f761cb892d4c1f1a89b17ea75609251319914d7187ce2bd19976dc237fbdec&w=1380",
						},
						{
							url: "https://img.freepik.com/photos-gratuite/vue-jasper_181624-21102.jpg?t=st=1730985257~exp=1730988857~hmac=a8551cf17f8e85dc90a21e21a89c95a82d453c8eb02ad77daf63dd3274a4927f&w=1380",
						},
					],
				},
				animaux: {
					create: [
						{
							prenom: "Blizzard",
							race: "Renne",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/gros-plan-beau-cerf-sol-enneige-dans-foret-hiver_181624-23668.jpg?t=st=1730985303~exp=1730988903~hmac=ffa05ffe70b7af5342570c2b1f89965d811a75a6e09fece6c3590aa6152d3d27&w=1380",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/beau-cerf-sol-enneige-dans-foret-hiver_181624-22121.jpg?t=st=1730985331~exp=1730988931~hmac=2eb124e95b4772dc7a298e8eac06d9991d3648683e3abcdcc04c1af2ba7566ef&w=1380",
									},
								],
							},
						},
						{
							prenom: "Frosty",
							race: "Loup arctique",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/photographie-gros-plan-animal-gris_406225-61.jpg?t=st=1730985445~exp=1730989045~hmac=d1828f58ba73a4afe843957c63a8e2c4beb82580ea891d32158bb77ac26d70e9&w=1380",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/renard-blanc-gris-couche-sol-couvert-neige-pendant-journee_406225-70.jpg?t=st=1730985483~exp=1730989083~hmac=45b28dd2f3fbbfc63538fdbacf26530157b44a85cf572281525a3f752260eac8&w=1380",
									},
								],
							},
						},
						{
							prenom: "Igloo",
							race: "Ours polaire",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/ours-polaire-aux-yeux-fermes-allonge-sol-sous-lumiere-du-soleil_181624-44050.jpg?t=st=1730985522~exp=1730989122~hmac=68d2915e2e0ee992ee334ed0f65e2ff939cc0af5a3cc58c8eaeff4501bcd0018&w=1380",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/mise-au-point-selective-ours-polaires_181624-30901.jpg?t=st=1730985546~exp=1730989146~hmac=62fa2673ec4388baaf5dc651779cebbb9e25746f1270923feb4f4c73b83f2da2&w=1380",
									},
								],
							},
						},
					],
				},
			},
		}),
		desertAride: await prismaClient.habitat.create({
			data: {
				nom: "Désert Aride",
				description:
					"Une région sèche et sablonneuse, adaptée aux animaux du désert.",
				images: {
					create: [
						{
							url: "https://img.freepik.com/photos-gratuite/champ-desertique-ouvert-collines-sable-ciel-bleu-nuageux_181624-23907.jpg?t=st=1730982653~exp=1730986253~hmac=450d466decfbea919055e5bfb35bc47a19c4bc5beb7e65ece3b314c45914210d&w=1380",
						},
						{
							url: "https://img.freepik.com/photos-gratuite/vue-paysage-champs-collines-par-journee-ensoleillee_181624-37472.jpg?t=st=1730985592~exp=1730989192~hmac=416db1ec3d002163b30d5ccf4f057c76391d78606cc36e4e46dc58204e818278&w=1380",
						},
					],
				},
				animaux: {
					create: [
						{
							prenom: "Dusty",
							race: "Chameau",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/regarder-droit-dans-visage-chameau-mignon_493961-1260.jpg?t=st=1730985624~exp=1730989224~hmac=57eb69ecf72061636dd60d2bb572781b1e1b482080cbe288a022429d03e9453a&w=1380",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/groupe-chameaux-buvant-eau-jour-sombre-dans-desert_181624-39015.jpg?t=st=1730985655~exp=1730989255~hmac=3fa38914638ab02699c2c0bf5a45315d1b0efbd5970ed71d8ae70ed026f31fa5&w=1380",
									},
								],
							},
						},
						{
							prenom: "Spike",
							race: "Fennec",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/plan-rapproche-renard-fennec-dormant-pierre-sous-sunlig-chaud_181624-55112.jpg?t=st=1730985695~exp=1730989295~hmac=c7d13452041e211530867f9caea93df67e881747b0139822405cf7da6d74aeca&w=1380",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/fennec-fox-desert-fox_1339-7445.jpg?t=st=1730985720~exp=1730989320~hmac=385d8c215d71cde552b428d6f9d80bacfdee3413ae372f2cfb21d92ed3d86cef&w=1380",
									},
								],
							},
						},
						{
							prenom: "Cactus",
							race: "Scorpion",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/empereur-scorpion-pandinus-imperator-libre_488145-824.jpg?t=st=1730985759~exp=1730989359~hmac=21d8bea9a885f22193f9da8619df946d8db6a76a529021ec7555723d695dbf99&w=1380",
									},
								],
							},
						},
					],
				},
			},
		}),
		foretEuropeenne: await prismaClient.habitat.create({
			data: {
				nom: "Forêt Européenne",
				description: "Une forêt tempérée abritant des espèces d’Europe.",
				images: {
					create: [
						{
							url: "https://img.freepik.com/photos-gratuite/petites-maisons-dans-montagne_181624-9144.jpg?t=st=1730982689~exp=1730986289~hmac=6607a70ec7f1edc7ea68a2692f073bc9add8d7f5224f64b0763070c711cff77b&w=1380",
						},
						{
							url: "https://img.freepik.com/photos-gratuite/belle-nature-foret-ruisseau-par-journee-ensoleillee_181624-29890.jpg?t=st=1730985793~exp=1730989393~hmac=44a89f003433a9af5e582d7627851f83cad6bc6206ff89de6ee0f9bd06a3deee&w=1380",
						},
					],
				},
				animaux: {
					create: [
						{
							prenom: "Bruno",
							race: "Cerf",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/gros-plan-cerf-baillant-belles-cornes_181624-13185.jpg?t=st=1730985829~exp=1730989429~hmac=1b970871a34034aac13331b0202246591061daa5c3b1492015fbb855a87a908a&w=996",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/gros-plan-elan-allonge-sol-sous-lumiere-du-soleil_181624-41985.jpg?t=st=1730985852~exp=1730989452~hmac=4303b04e44210cb93856a0ebb946766e281089d51300ccc1aeec4d13bfd9ed21&w=1380",
									},
								],
							},
						},
						{
							prenom: "Willow",
							race: "Renard roux",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/beau-visage-renard-roux-pres-personnel_493961-180.jpg?t=st=1730985871~exp=1730989471~hmac=176417ee8aaadd0b1f90b59cd7816b19eeaf98d641506f75b910178ee9151978&w=1380",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/renard-mignon-expression-faciale-sournoise-pres-branche-arbre-dans-foret_181624-4479.jpg?t=st=1730985896~exp=1730989496~hmac=a8986460bced243f9b48481d2b3f98d26726a378e820d2d4abd42b991be09032&w=1380",
									},
								],
							},
						},
						{
							prenom: "Whiskers",
							race: "Lynx",
							images: {
								create: [
									{
										url: "https://img.freepik.com/photos-gratuite/gros-plan-visage-lynx-arriere-plan-flou_181624-56147.jpg?t=st=1730985934~exp=1730989534~hmac=b55f5437b1c871ccfc2dbeebd315dd394e89ee4e19135eb0cd7c2a9426de007d&w=1380",
									},
									{
										url: "https://img.freepik.com/photos-gratuite/vue-curieux-chats-sauvages-recherche-quelque-chose-interessant-dans-foret-enneigee-par-temps-glacial_181624-18539.jpg?t=st=1730985948~exp=1730989548~hmac=c634ed250aa1b04eba2100910d979c351ca762ddecceaa5c94fdc7563c49dba8&w=1380",
									},
								],
							},
						},
					],
				},
			},
		}),
	}

	const avis = await prismaClient.avis.createMany({
		data: [
			{
				pseudo: "NatureLover92",
				commentaire:
					"Un zoo magnifique ! Les habitats sont bien recréés et les animaux semblent heureux. On sent vraiment que le bien-être animal est une priorité ici.",
				isVisible: false,
			},
			{
				pseudo: "FamilleMartin",
				commentaire:
					"Nous avons passé une journée exceptionnelle en famille. Le personnel est accueillant et le petit train est un super moyen de visiter sans trop marcher. À refaire !",
				isVisible: true,
			},
			{
				pseudo: "AventurierBreton",
				commentaire:
					"La diversité des animaux est impressionnante et la visite guidée est très enrichissante. Mention spéciale pour les espaces verts bien entretenus.",
				isVisible: true,
			},
			{
				pseudo: "EcoFriendly",
				commentaire:
					"J'adore leur engagement écologique, de la boutique aux pique-niques écoresponsables ! C'est génial de voir un zoo aussi respectueux de l’environnement.",
				isVisible: true,
			},
			{
				pseudo: "PetitsExplorateurs56",
				commentaire:
					"Les enfants ont adoré l'atelier Jeune Explorateur ! Une super idée pour les sensibiliser à la nature et au respect des animaux.",
				isVisible: true,
			},
			{
				pseudo: "VoyageuseCurieuse",
				commentaire:
					"Un endroit magique, surtout la Jungle Tropicale ! J’ai appris beaucoup de choses grâce aux animations et aux spectacles. À visiter absolument.",
				isVisible: true,
			},
			{
				pseudo: "AmisDesAnimaux22",
				commentaire:
					"Le zoo est vraiment beau et les animaux sont bien soignés. L’équipe est passionnée et ça se voit ! Je recommande pour tous les amoureux de la faune.",
				isVisible: true,
			},
			{
				pseudo: "BioFoodie",
				commentaire:
					"Le restaurant bio est un vrai plus ! Les plats sont délicieux et on sent bien la qualité des produits. Une belle pause en pleine nature.",
				isVisible: true,
			},
			{
				pseudo: "PapaDeLouise",
				commentaire:
					"Mes enfants ont adoré, surtout la visite en petit train. Une super activité à faire en famille. Merci à l’équipe pour cette belle expérience !",
				isVisible: true,
			},
			{
				pseudo: "RandonneurSolitaire",
				commentaire:
					"Un cadre exceptionnel près de Brocéliande. On a l’impression d’être en pleine nature. Je reviendrai, c’est sûr.",
				isVisible: true,
			},
		],
	})

	return Response.json({ message: "Seed succesfuly" })
}
