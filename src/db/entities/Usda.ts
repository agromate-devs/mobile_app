import { Column, Entity } from 'typeorm';

@Entity('usda')
export class Usda {
	@Column('integer', { primary: true, name: 'id' })
	id: number;

	@Column('varchar', { name: 'Scientific_Name_x', nullable: true })
	scientificNameX: string | null;

	@Column('varchar', { name: 'Species', nullable: true })
	species: string | null;

	@Column('varchar', { name: 'Subspecies', nullable: true })
	subspecies: string | null;

	@Column('varchar', { name: 'Variety', nullable: true })
	variety: string | null;

	@Column('varchar', { name: 'Subvariety', nullable: true })
	subvariety: string | null;

	@Column('varchar', { name: 'Common_Name', nullable: true })
	commonName: string | null;

	@Column('varchar', { name: 'Category', nullable: true })
	category: string | null;

	@Column('varchar', { name: 'Family', nullable: true })
	family: string | null;

	@Column('varchar', { name: 'Family_Common_Name', nullable: true })
	familyCommonName: string | null;

	@Column('varchar', { name: 'SubClass', nullable: true })
	subClass: string | null;

	@Column('varchar', { name: 'Class', nullable: true })
	class: string | null;

	@Column('varchar', { name: 'SubDivision', nullable: true })
	subDivision: string | null;

	@Column('varchar', { name: 'Division', nullable: true })
	division: string | null;

	@Column('varchar', { name: 'SuperDivision', nullable: true })
	superDivision: string | null;

	@Column('varchar', { name: 'SubKingdom', nullable: true })
	subKingdom: string | null;

	@Column('varchar', { name: 'Kingdom', nullable: true })
	kingdom: string | null;

	@Column('varchar', { name: 'Duration', nullable: true })
	duration: string | null;

	@Column('varchar', { name: 'Growth_Habit', nullable: true })
	growthHabit: string | null;

	@Column('varchar', { name: 'Invasive', nullable: true })
	invasive: string | null;

	@Column('varchar', { name: 'Scientific_Name_y', nullable: true })
	scientificNameY: string | null;

	@Column('varchar', { name: 'Active_Growth_Period', nullable: true })
	activeGrowthPeriod: string | null;

	@Column('varchar', { name: 'After_Harvest_Regrowth_Rate', nullable: true })
	afterHarvestRegrowthRate: string | null;

	@Column('varchar', { name: 'Bloat', nullable: true })
	bloat: string | null;

	@Column('varchar', { name: 'C_N_Ratio', nullable: true })
	cNRatio: string | null;

	@Column('varchar', { name: 'Coppice_Potential', nullable: true })
	coppicePotential: string | null;

	@Column('varchar', { name: 'Fall_Conspicuous', nullable: true })
	fallConspicuous: string | null;

	@Column('varchar', { name: 'Fire_Resistance', nullable: true })
	fireResistance: string | null;

	@Column('varchar', { name: 'Flower_Color', nullable: true })
	flowerColor: string | null;

	@Column('varchar', { name: 'Flower_Conspicuous', nullable: true })
	flowerConspicuous: string | null;

	@Column('varchar', { name: 'Foliage_Color', nullable: true })
	foliageColor: string | null;

	@Column('varchar', { name: 'Foliage_Porosity_Summer', nullable: true })
	foliagePorositySummer: string | null;

	@Column('varchar', { name: 'Foliage_Porosity_Winter', nullable: true })
	foliagePorosityWinter: string | null;

	@Column('varchar', { name: 'Foliage_Texture', nullable: true })
	foliageTexture: string | null;

	@Column('varchar', { name: 'Fruit_Color', nullable: true })
	fruitColor: string | null;

	@Column('varchar', { name: 'Fruit_Conspicuous', nullable: true })
	fruitConspicuous: string | null;

	@Column('varchar', { name: 'Growth_Form', nullable: true })
	growthForm: string | null;

	@Column('varchar', { name: 'Growth_Rate', nullable: true })
	growthRate: string | null;

	@Column('varchar', {
		name: 'Height_at_Base_Age_Maximum_feet',
		nullable: true
	})
	heightAtBaseAgeMaximumFeet: string | null;

	@Column('varchar', { name: 'Known_Allelopath', nullable: true })
	knownAllelopath: string | null;

	@Column('varchar', { name: 'Leaf_Retention', nullable: true })
	leafRetention: string | null;

	@Column('varchar', { name: 'Lifespan', nullable: true })
	lifespan: string | null;

	@Column('varchar', { name: 'Low_Growing_Grass', nullable: true })
	lowGrowingGrass: string | null;

	@Column('varchar', { name: 'Nitrogen_Fixation', nullable: true })
	nitrogenFixation: string | null;

	@Column('varchar', { name: 'Resprout_Ability', nullable: true })
	resproutAbility: string | null;

	@Column('varchar', { name: 'Shape_and_Orientation', nullable: true })
	shapeAndOrientation: string | null;

	@Column('varchar', { name: 'Toxicity', nullable: true })
	toxicity: string | null;

	@Column('varchar', {
		name: 'Adapted_to_Coarse_Textured_Soils',
		nullable: true
	})
	adaptedToCoarseTexturedSoils: string | null;

	@Column('varchar', {
		name: 'Adapted_to_Medium_Textured_Soils',
		nullable: true
	})
	adaptedToMediumTexturedSoils: string | null;

	@Column('varchar', { name: 'Adapted_to_Fine_Textured_Soils', nullable: true })
	adaptedToFineTexturedSoils: string | null;

	@Column('varchar', { name: 'Anaerobic_Tolerance', nullable: true })
	anaerobicTolerance: string | null;

	@Column('varchar', { name: 'CaCO_3_Tolerance', nullable: true })
	caCo_3Tolerance: string | null;

	@Column('varchar', { name: 'Cold_Stratification_Required', nullable: true })
	coldStratificationRequired: string | null;

	@Column('varchar', { name: 'Drought_Tolerance', nullable: true })
	droughtTolerance: string | null;

	@Column('varchar', { name: 'Fire_Tolerance', nullable: true })
	fireTolerance: string | null;

	@Column('varchar', { name: 'Frost_Free_Days_Minimum', nullable: true })
	frostFreeDaysMinimum: string | null;

	@Column('varchar', { name: 'Hedge_Tolerance', nullable: true })
	hedgeTolerance: string | null;

	@Column('varchar', { name: 'Moisture_Use', nullable: true })
	moistureUse: string | null;

	@Column('varchar', { name: 'pH_Minimum', nullable: true })
	pHMinimum: string | null;

	@Column('varchar', { name: 'pH_Maximum', nullable: true })
	pHMaximum: string | null;

	@Column('varchar', {
		name: 'Planting_Density_per_Acre_Minimum',
		nullable: true
	})
	plantingDensityPerAcreMinimum: string | null;

	@Column('varchar', {
		name: 'Planting_Density_per_Acre_Maximum',
		nullable: true
	})
	plantingDensityPerAcreMaximum: string | null;

	@Column('varchar', { name: 'Precipitation_Minimum', nullable: true })
	precipitationMinimum: string | null;

	@Column('varchar', { name: 'Precipitation_Maximum', nullable: true })
	precipitationMaximum: string | null;

	@Column('varchar', { name: 'Root_Depth_Minimum_inches', nullable: true })
	rootDepthMinimumInches: string | null;

	@Column('varchar', { name: 'Salinity_Tolerance', nullable: true })
	salinityTolerance: string | null;

	@Column('varchar', { name: 'Shade_Tolerance', nullable: true })
	shadeTolerance: string | null;

	@Column('varchar', { name: 'Temperature_Minimum_F', nullable: true })
	temperatureMinimumF: string | null;

	@Column('varchar', { name: 'Bloom_Period', nullable: true })
	bloomPeriod: string | null;

	@Column('varchar', { name: 'Commercial_Availability', nullable: true })
	commercialAvailability: string | null;

	@Column('varchar', { name: 'Fruit_Seed_Abundance', nullable: true })
	fruitSeedAbundance: string | null;

	@Column('varchar', { name: 'Fruit_Seed_Period_Begin', nullable: true })
	fruitSeedPeriodBegin: string | null;

	@Column('varchar', { name: 'Fruit_Seed_Period_End', nullable: true })
	fruitSeedPeriodEnd: string | null;

	@Column('varchar', { name: 'Fruit_Seed_Persistence', nullable: true })
	fruitSeedPersistence: string | null;

	@Column('varchar', { name: 'Seeds_per_Pound', nullable: true })
	seedsPerPound: string | null;

	@Column('varchar', { name: 'Seed_Spread_Rate', nullable: true })
	seedSpreadRate: string | null;

	@Column('varchar', { name: 'Seedling_Vigor', nullable: true })
	seedlingVigor: string | null;

	@Column('varchar', { name: 'Small_Grain', nullable: true })
	smallGrain: string | null;

	@Column('varchar', { name: 'Vegetative_Spread_Rate', nullable: true })
	vegetativeSpreadRate: string | null;

	@Column('varchar', { name: 'Berry_Nut_Seed_Product', nullable: true })
	berryNutSeedProduct: string | null;

	@Column('varchar', { name: 'Fodder_Product', nullable: true })
	fodderProduct: string | null;

	@Column('varchar', { name: 'Fuelwood_Product', nullable: true })
	fuelwoodProduct: string | null;

	@Column('varchar', { name: 'Lumber_Product', nullable: true })
	lumberProduct: string | null;

	@Column('varchar', { name: 'Palatable_Browse_Animal', nullable: true })
	palatableBrowseAnimal: string | null;

	@Column('varchar', { name: 'Palatable_Graze_Animal', nullable: true })
	palatableGrazeAnimal: string | null;

	@Column('varchar', { name: 'Palatable_Human', nullable: true })
	palatableHuman: string | null;

	@Column('varchar', { name: 'Post_Product', nullable: true })
	postProduct: string | null;

	@Column('varchar', { name: 'Protein_Potential', nullable: true })
	proteinPotential: string | null;

	@Column('varchar', { name: 'Pulpwood_Product', nullable: true })
	pulpwoodProduct: string | null;

	@Column('varchar', { name: 'Genus', nullable: true })
	genus: string | null;
}
