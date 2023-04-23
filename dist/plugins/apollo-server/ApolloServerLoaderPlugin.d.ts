import type { ApolloServerPlugin } from "apollo-server-plugin-base";
import type { Connection } from "typeorm";
interface ApolloServerLoaderPluginOption {
    typeormGetConnection?: () => Connection;
}
declare const ApolloServerLoaderPlugin: (option?: ApolloServerLoaderPluginOption | undefined) => ApolloServerPlugin;
export { ApolloServerLoaderPlugin };
