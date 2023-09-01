
import {
    defineCustomElements as jeepSqlite,
    applyPolyfills,
} from "jeep-sqlite/loader";

import {
    CapacitorSQLite,
    SQLiteConnection
} from "@capacitor-community/sqlite";
import { DataSource } from 'typeorm';
import { Usda } from './entities/Usda';
import { Capacitor } from "@capacitor/core";

export class DBContext {
    private initial_db = {
        database: "plants",
        version: 1,
        encrypted: false,
        mode: "full",
    };
    private sqlite: SQLiteConnection;
    private datasource: DataSource;

    /*
        Helper to init SQLite in page
    */
    private init_jeep_sqlite() {
        applyPolyfills().then(() => {
            jeepSqlite(window);
        });

        // Create the 'jeep-sqlite' Stencil component
        const jeep_element = document.createElement("jeep-sqlite");
        document.body.appendChild(jeep_element);
    }

    async init_capacitor_sqlite_plugin() {
        this.init_jeep_sqlite();

        this.sqlite = new SQLiteConnection(CapacitorSQLite);

        // await customElements.whenDefined("jeep-sqlite");
        // Initialize the Web store
        await this.sqlite.initWebStore();


    }

    constructor() { }

    async init_db() {   // Initialize TypeORM
        if(this.datasource != null) // Avoid to open multiple SQLite connections
            return;
        await this.sqlite.importFromJson(JSON.stringify(this.initial_db));
        this.datasource = new DataSource({
            type: "capacitor",
            driver: this.sqlite, // pass the connection wrapper here
            database: "plants", // database name without the `.db` suffix
            logging: false,
            entities: [Usda]
        });
        await this.datasource.initialize();
    }

    async query(query: string) {    // Helper to scaffold DB
        return await this.datasource.query(query);
    }

    async is_database_saved() {
        try {
            return (await this.sqlite.isDatabase("plants")).result;
        } catch (error) {   // fallback
            return false;            
        }
    }

    async save_database() {
        await this.sqlite.saveToStore("plants");
    }

    async get_all_plants() {
        return await this.datasource.getRepository(Usda).createQueryBuilder("usda").distinctOn(["usda.family"]).select("usda.family").addSelect("usda.id").groupBy("usda.family").getMany();
    }

    async get_plants_by_family(family: string) {
        // TODO: Cleanup the query to retrive less data
        return await this.datasource
        .getRepository(Usda)
        .createQueryBuilder("usda")
        // .select("usda.id")
        // .addSelect("usda.family")
        // .addSelect("usda.Common_Name")
        // .addSelect("usda.Scientific_Name_x")
        // .addSelect("usda.Precipitation_Minimum")
        // .addSelect("usda.Precipitation_Maximum")
        // .addSelect("usda.pH_Minimum")
        // .addSelect("usda.pH_Maximum")
        // .addSelect("usda.Temperature_Minimum_F")
        // .addSelect("usda.Growth_Rate")
        .where("usda.family = :Family", { Family: family})
        .groupBy("usda.Common_Name")
        .getMany();
    }

    async get_plant_by_common_name(common_name: string) {
        return await this.datasource
        .getRepository(Usda)
        .createQueryBuilder("usda")
        // .select("usda.id")
        // .addSelect("usda.family")
        // .addSelect("usda.Common_Name")
        // .addSelect("usda.Scientific_Name_x")
        // .addSelect("usda.Precipitation_Minimum")
        // .addSelect("usda.Precipitation_Maximum")
        // .addSelect("usda.pH_Minimum")
        // .addSelect("usda.pH_Maximum")
        // .addSelect("usda.Temperature_Minimum_F")
        // .addSelect("usda.Growth_Rate")
        .where("usda.Common_Name = :Name", { Name: common_name })
        .getOne();
    }
}