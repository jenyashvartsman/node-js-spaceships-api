import { DataSource, DataSourceOptions } from "typeorm";
import { createDatabase } from "typeorm-extension";

const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "changeme",
  database: "node_js_spaceships_api",
  synchronize: true,
  entities: ["src/entities/**/*.ts"],
};

export const dataSource = new DataSource(dataSourceOptions);

export const initDataSource = async () => {
  await createDatabase({
    ifNotExist: true,
    options: dataSourceOptions,
  });
  await dataSource.initialize();
};
