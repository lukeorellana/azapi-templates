import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceGatewaysProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Gateway description
   */
readonly description?: string;

/**
   * Gateway location.
   */
readonly locationData?: ResourceLocationDataContract;

/**
   * The city or locality where the resource is located.
   */
readonly city?: string;

/**
   * The country or region where the resource is located.
   */
readonly countryOrRegion?: string;

/**
   * The district, state, or province where the resource is located.
   */
readonly district?: string;
}

/**
 * ApimanagementServiceGateways resource
 */
export class ApimanagementServiceGateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceGatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/gateways@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceGatewaysProps): string {
    return JSON.stringify(
        {properties: {description: "string", locationData: {city: "string", countryOrRegion: "string", district: "string", name: "string"}}}
    );
  }
}
