// https://www.terraform.io/docs/providers/azuread/r/claims_mapping_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClaimsMappingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string collection containing a JSON string that defines the rules and settings for this policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/claims_mapping_policy#definition ClaimsMappingPolicy#definition}
  */
  readonly definition: string[];
  /**
  * Display name for this policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/claims_mapping_policy#display_name ClaimsMappingPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/claims_mapping_policy#id ClaimsMappingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/claims_mapping_policy azuread_claims_mapping_policy}
*/
export class ClaimsMappingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_claims_mapping_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/claims_mapping_policy azuread_claims_mapping_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClaimsMappingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ClaimsMappingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_claims_mapping_policy',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.33.0',
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
    this._definition = config.definition;
    this._displayName = config.displayName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // definition - computed: false, optional: false, required: true
  private _definition?: string[]; 
  public get definition() {
    return this.getListAttribute('definition');
  }
  public set definition(value: string[]) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      definition: cdktf.listMapper(cdktf.stringToTerraform, false)(this._definition),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
