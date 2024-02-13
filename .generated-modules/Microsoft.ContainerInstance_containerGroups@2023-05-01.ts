// import { Construct } from "constructs";
// import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

// export interface ContainerinstanceContainergroupsProps extends IAzAPIBaseProps {
//   readonly identity?: string;
//   readonly zones?: string[];
//   readonly osType: "Linux" | "Windows";
//   readonly image: string;
//   readonly resources: ResourceRequirements;
// }

// export class ContainerinstanceContainergroups extends AzAPIBase {
//   constructor(
//     scope: Construct,
//     id: string,
//     props: ContainerinstanceContainergroupsProps,
//   ) {
//     super(scope, id, props);
//   }

//   protected getResourceType(): string {
//     return "Microsoft.ContainerInstance/containerGroups@2023-05-01";
//   }

//   protected getResourceBody(
//     props: ContainerinstanceContainergroupsProps,
//   ): string {
//     return JSON.stringify({
//       properties: {
//         osType: props.osType,
//         containers: [
//           {
//             name: "string",
//             properties: {
//               image: props.image,
//               resources: {
//                 requests: {
//                   cpu: "${int}",
//                   memoryInGB: "decimal-as-string",
//                 },
//                 limits: {
//                   cpu: "${int}",
//                   memoryInGB: "decimal-as-string",
//                 },
//               },
//             },
//           },
//         ],
//         ipAddress: {
//           type: "string",
//         },
//         identity: {
//           type: props.identity,
//         },
//         zones: props.zones,
//       },
//     });
//   }
// }

// interface ResourceRequirements {
//   readonly requests: ResourceRequests;
//   readonly limits?: ResourceLimits;
// }

// interface ResourceRequests {
//   readonly cpu: number;
//   readonly memoryInGB: number;
// }

// interface ResourceLimits {
//   readonly cpu?: number;
//   readonly memoryInGB?: number;
// }
