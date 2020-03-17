import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import  { join } from 'path';

@Module({
    imports:[ GraphQLModule.forRoot({
        typePaths: ['./**/*.graphql'],
        definitions: {
            path: join(process.cwd(), 'src/graphql/graphql.schema.ts'),
            outputAs: 'class',
        },
        installSubscriptionHandlers: true,
        debug: true,
        playground: true
        })
    ],
    exports:[GraphQLModule],
    providers: [],
})
export class GraphqlModule {}
