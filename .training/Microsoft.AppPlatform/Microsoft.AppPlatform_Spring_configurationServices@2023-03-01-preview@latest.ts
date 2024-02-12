import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringConfigurationservicesProps extends IAzAPIBaseProps {

}

/**
 * AppplatformSpringConfigurationservices resource
 */
export class AppplatformSpringConfigurationservices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringConfigurationservicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/configurationServices@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringConfigurationservicesProps): string {
    return JSON.stringify(
        {properties: {settings: {gitProperty: {repositories: [{hostKey: "string", hostKeyAlgorithm: "string", label: "string", name: "string", password: "string", patterns: ["string"], privateKey: "string", searchPaths: ["string"], strictHostKeyChecking: "${bool}", uri: "string", username: "string"}]}}}}
    );
  }
}
