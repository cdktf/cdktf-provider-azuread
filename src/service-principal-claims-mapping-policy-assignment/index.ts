// https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_claims_mapping_policy_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePrincipalClaimsMappingPolicyAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the claims mapping policy to assign
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_claims_mapping_policy_assignment#claims_mapping_policy_id ServicePrincipalClaimsMappingPolicyAssignment#claims_mapping_policy_id}
  */
  readonly claimsMappingPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_claims_mapping_policy_assignment#id ServicePrincipalClaimsMappingPolicyAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object ID of the service principal for which to assign the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_claims_mapping_policy_assignment#service_principal_id ServicePrincipalClaimsMappingPolicyAssignment#service_principal_id}
  */
  readonly servicePrincipalId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_claims_mapping_policy_assignment azuread_service_principal_claims_mapping_policy_assignment}
*/
export class ServicePrincipalClaimsMappingPolicyAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_service_principal_claims_mapping_policy_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicePrincipalClaimsMappingPolicyAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicePrincipalClaimsMappingPolicyAssignment to import
  * @param importFromId The id of the existing ServicePrincipalClaimsMappingPolicyAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_claims_mapping_policy_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicePrincipalClaimsMappingPolicyAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_service_principal_claims_mapping_policy_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_claims_mapping_policy_assignment azuread_service_principal_claims_mapping_policy_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePrincipalClaimsMappingPolicyAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: ServicePrincipalClaimsMappingPolicyAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_service_principal_claims_mapping_policy_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.49.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._claimsMappingPolicyId = config.claimsMappingPolicyId;
    this._id = config.id;
    this._servicePrincipalId = config.servicePrincipalId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // claims_mapping_policy_id - computed: false, optional: false, required: true
  private _claimsMappingPolicyId?: string; 
  public get claimsMappingPolicyId() {
    return this.getStringAttribute('claims_mapping_policy_id');
  }
  public set claimsMappingPolicyId(value: string) {
    this._claimsMappingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsMappingPolicyIdInput() {
    return this._claimsMappingPolicyId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // service_principal_id - computed: false, optional: false, required: true
  private _servicePrincipalId?: string; 
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }
  public set servicePrincipalId(value: string) {
    this._servicePrincipalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalIdInput() {
    return this._servicePrincipalId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      claims_mapping_policy_id: cdktf.stringToTerraform(this._claimsMappingPolicyId),
      id: cdktf.stringToTerraform(this._id),
      service_principal_id: cdktf.stringToTerraform(this._servicePrincipalId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      claims_mapping_policy_id: {
        value: cdktf.stringToHclTerraform(this._claimsMappingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_principal_id: {
        value: cdktf.stringToHclTerraform(this._servicePrincipalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
