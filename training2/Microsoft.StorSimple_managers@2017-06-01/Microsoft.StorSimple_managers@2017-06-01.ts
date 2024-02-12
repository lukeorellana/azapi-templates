import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersProps extends IAzAPIBaseProps {
/**
   * The etag of the manager.
   */
readonly etag?: string;

/**
   * Represents the type of StorSimple Manager.
   */
readonly cisIntrinsicSettings?: ManagerIntrinsicSettings;

/**
   * Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created.
   */
readonly provisioningState?: string;

/**
   * Specifies the Sku.
   */
readonly sku?: ManagerSku;

/**
   * The type of StorSimple Manager.
   */
readonly type: 'GardaV1''HelsinkiV1';
}

/**
 * StorsimpleManagers resource
 */
export class StorsimpleManagers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers@2017-06-01";
  }

  protected getResourceBody(props: StorsimpleManagersProps): string {
    return JSON.stringify(
        {properties: {cisIntrinsicSettings: {type: "string"}, provisioningState: "string", sku: {name: "Standard"}}, etag: "string"}
    );
  }
}
