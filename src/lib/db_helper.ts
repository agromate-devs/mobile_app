export async function import_records(dbcontext) {
    const plants = (await (await fetch('usda_light.sql')).text()).split('\n');
    for (let index = 0; index < plants.length; index++) {
        await dbcontext.query(plants[index]);
    }
}

export async function import_schema(dbcontext) {
    const schema = await (await fetch('usda_tables.sql')).text();
    await dbcontext.query(schema);
}