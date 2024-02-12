import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StoragecacheCachesStoragetargetsProps extends IAzAPIBaseProps {

}

/**
 * StoragecacheCachesStoragetargets resource
 */
export class StoragecacheCachesStoragetargets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StoragecacheCachesStoragetargetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorageCache/caches/storageTargets@2023-05-01";
  }

  protected getResourceBody(props: StoragecacheCachesStoragetargetsProps): string {
    return JSON.stringify(
        {properties: {blobNfs: {target: "string", usageModel: "string", verificationTimer: "${int}", writeBackTimer: "${int}"}, clfs: {target: "string"}, junctions: [{namespacePath: "string", nfsAccessPolicy: "string", nfsExport: "string", targetPath: "string"}], nfs3: {target: "string", usageModel: "string", verificationTimer: "${int}", writeBackTimer: "${int}"}, state: "string", targetType: "string", unknown: {attributes: {}}}}
    );
  }
}
