import {config} from '../config.js';
import SQ from 'sequelize';

const{ host, user, database, passowrd } = config.db;
export const sequelize = new SQ.Sequelize(database, user, passowrd, {
    host,
    dialect: 'mariadb',
    logging: false,
    timeZone: "+09:00",
    port :32348
});

/*onst pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    database: config.db.database,
    password: config.db.passowrd
});

export const db = pool.promise();*/