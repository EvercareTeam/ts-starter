import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () =>
        ({
          type: process.env.DB_CLIENT || 'mysql',
          host: process.env.MYSQL_HOST || 'localhost',
          port: +(process.env.MYSQL_PORT || 3306),
          username: process.env.MYSQL_USER || 'root',
          password: process.env.MYSQL_PASS || 'root',
          database: process.env.MYSQL_DATABASE || process.env.SQLITE_DATABASE || 'test',
          entities: [`${__dirname}/**/*.entity{.ts,.js}`],
          synchronize: true,
        } as MysqlConnectionOptions | SqliteConnectionOptions),
    }),
    CustomersModule,
  ],
})
export class AppModule {}
