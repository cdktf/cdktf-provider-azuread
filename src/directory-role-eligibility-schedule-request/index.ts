/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/3.2.0/docs/resources/directory_role_eligibility_schedule_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectoryRoleEligibilityScheduleRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the directory object representing the scope of the role eligibility schedule request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.2.0/docs/resources/directory_role_eligibility_schedule_request#directory_scope_id DirectoryRoleEligibilityScheduleRequest#directory_scope_id}
  */
  readonly directoryScopeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.2.0/docs/resources/directory_role_eligibility_schedule_request#id DirectoryRoleEligibilityScheduleRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Justification for why the role is assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.2.0/docs/resources/directory_role_eligibility_schedule_request#justification DirectoryRoleEligibilityScheduleRequest#justification}
  */
  readonly justification: string;
  /**
  * The object ID of the member principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.2.0/docs/resources/directory_role_eligibility_schedule_request#principal_id DirectoryRoleEligibilityScheduleRequest#principal_id}
  */
  readonly principalId: string;
  /**
  * The object ID of the directory role for this role eligibility schedule request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.2.0/docs/resources/directory_role_eligibility_schedule_request#role_definition_id DirectoryRoleEligibilityScheduleRequest#role_definition_id}
  */
  readonly roleDefinitionId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.2.0/docs/resources/directory_role_eligibility_schedule_request#timeouts DirectoryRoleEligibilityScheduleRequest#timeouts}
  */
  readonly timeouts?: DirectoryRoleEligibilityScheduleRequestTimeouts;
}
export interface DirectoryRoleEligibilityScheduleRequestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.2.0/docs/resources/directory_role_eligibility_schedule_request#create DirectoryRoleEligibilityScheduleRequest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.2.0/docs/resources/directory_role_eligibility_schedule_request#delete DirectoryRoleEligibilityScheduleRequest#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.2.0/docs/resources/directory_role_eligibility_schedule_request#read DirectoryRoleEligibilityScheduleRequest#read}
  */
  readonly read?: string;
}

export function directoryRoleEligibilityScheduleRequestTimeoutsToTerraform(struct?: DirectoryRoleEligibilityScheduleRequestTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function directoryRoleEligibilityScheduleRequestTimeoutsToHclTerraform(struct?: DirectoryRoleEligibilityScheduleRequestTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DirectoryRoleEligibilityScheduleRequestTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryRoleEligibilityScheduleRequestTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.2.0/docs/resources/directory_role_eligibility_schedule_request azuread_directory_role_eligibility_schedule_request}
*/
export class DirectoryRoleEligibilityScheduleRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_directory_role_eligibility_schedule_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DirectoryRoleEligibilityScheduleRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectoryRoleEligibilityScheduleRequest to import
  * @param importFromId The id of the existing DirectoryRoleEligibilityScheduleRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.2.0/docs/resources/directory_role_eligibility_schedule_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectoryRoleEligibilityScheduleRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_directory_role_eligibility_schedule_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/3.2.0/docs/resources/directory_role_eligibility_schedule_request azuread_directory_role_eligibility_schedule_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectoryRoleEligibilityScheduleRequestConfig
  */
  public constructor(scope: Construct, id: string, config: DirectoryRoleEligibilityScheduleRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_directory_role_eligibility_schedule_request',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '3.2.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directoryScopeId = config.directoryScopeId;
    this._id = config.id;
    this._justification = config.justification;
    this._principalId = config.principalId;
    this._roleDefinitionId = config.roleDefinitionId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // directory_scope_id - computed: false, optional: false, required: true
  private _directoryScopeId?: string; 
  public get directoryScopeId() {
    return this.getStringAttribute('directory_scope_id');
  }
  public set directoryScopeId(value: string) {
    this._directoryScopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryScopeIdInput() {
    return this._directoryScopeId;
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

  // justification - computed: false, optional: false, required: true
  private _justification?: string; 
  public get justification() {
    return this.getStringAttribute('justification');
  }
  public set justification(value: string) {
    this._justification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationInput() {
    return this._justification;
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // role_definition_id - computed: false, optional: false, required: true
  private _roleDefinitionId?: string; 
  public get roleDefinitionId() {
    return this.getStringAttribute('role_definition_id');
  }
  public set roleDefinitionId(value: string) {
    this._roleDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleDefinitionIdInput() {
    return this._roleDefinitionId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DirectoryRoleEligibilityScheduleRequestTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_scope_id: cdktf.stringToTerraform(this._directoryScopeId),
      id: cdktf.stringToTerraform(this._id),
      justification: cdktf.stringToTerraform(this._justification),
      principal_id: cdktf.stringToTerraform(this._principalId),
      role_definition_id: cdktf.stringToTerraform(this._roleDefinitionId),
      timeouts: directoryRoleEligibilityScheduleRequestTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory_scope_id: {
        value: cdktf.stringToHclTerraform(this._directoryScopeId),
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
      justification: {
        value: cdktf.stringToHclTerraform(this._justification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_id: {
        value: cdktf.stringToHclTerraform(this._principalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_definition_id: {
        value: cdktf.stringToHclTerraform(this._roleDefinitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: directoryRoleEligibilityScheduleRequestTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DirectoryRoleEligibilityScheduleRequestTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
