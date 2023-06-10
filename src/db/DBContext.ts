
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
        return (await this.sqlite.isDatabase("plants")).result;
    }

    async save_database() {
        await this.sqlite.saveToStore("plants");
    }

    async get_all_plants() {
        return await this.datasource.getRepository(Usda).createQueryBuilder("usda").distinctOn(["usda.family"]).select("usda.family").addSelect("usda.id").groupBy("usda.family").getMany();
    }
}