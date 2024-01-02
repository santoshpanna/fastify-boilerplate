import fastifyAutoload from "@fastify/autoload";

export interface AutoLoadOptions extends fastifyAutoload.AutoloadPluginOptions {}
export interface AutoLoadNext {
  (err?: Error | undefined) : void
}