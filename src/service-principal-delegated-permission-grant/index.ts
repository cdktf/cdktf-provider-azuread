/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_delegated_permission_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePrincipalDelegatedPermissionGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of claim values for delegated permission scopes which should be included in access tokens for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_delegated_permission_grant#claim_values ServicePrincipalDelegatedPermissionGrant#claim_values}
  */
  readonly claimValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_delegated_permission_grant#id ServicePrincipalDelegatedPermissionGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The object ID of the service principal representing the resource to be accessed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_delegated_permission_grant#resource_service_principal_object_id ServicePrincipalDelegatedPermissionGrant#resource_service_principal_object_id}
  */
  readonly resourceServicePrincipalObjectId: string;
  /**
  * The object ID of the service principal for which this delegated permission grant should be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_delegated_permission_grant#service_principal_object_id ServicePrincipalDelegatedPermissionGrant#service_principal_object_id}
  */
  readonly servicePrincipalObjectId: string;
  /**
  * The object ID of the user on behalf of whom the service principal is authorized to access the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_delegated_permission_grant#user_object_id ServicePrincipalDelegatedPermissionGrant#user_object_id}
  */
  readonly userObjectId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_delegated_permission_grant#timeouts ServicePrincipalDelegatedPermissionGrant#timeouts}
  */
  readonly timeouts?: ServicePrincipalDelegatedPermissionGrantTimeouts;
}
export interface ServicePrincipalDelegatedPermissionGrantTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_delegated_permission_grant#create ServicePrincipalDelegatedPermissionGrant#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_delegated_permission_grant#delete ServicePrincipalDelegatedPermissionGrant#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_delegated_permission_grant#read ServicePrincipalDelegatedPermissionGrant#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_delegated_permission_grant#update ServicePrincipalDelegatedPermissionGrant#update}
  */
  readonly update?: string;
}

export function servicePrincipalDelegatedPermissionGrantTimeoutsToTerraform(struct?: ServicePrincipalDelegatedPermissionGrantTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function servicePrincipalDelegatedPermissionGrantTimeoutsToHclTerraform(struct?: ServicePrincipalDelegatedPermissionGrantTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicePrincipalDelegatedPermissionGrantTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePrincipalDelegatedPermissionGrantTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_delegated_permission_grant azuread_service_principal_delegated_permission_grant}
*/
export class ServicePrincipalDelegatedPermissionGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_service_principal_delegated_permission_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicePrincipalDelegatedPermissionGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicePrincipalDelegatedPermissionGrant to import
  * @param importFromId The id of the existing ServicePrincipalDelegatedPermissionGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_delegated_permission_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicePrincipalDelegatedPermissionGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_service_principal_delegated_permission_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/resources/service_principal_delegated_permission_grant azuread_service_principal_delegated_permission_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePrincipalDelegatedPermissionGrantConfig
  */
  public constructor(scope: Construct, id: string, config: ServicePrincipalDelegatedPermissionGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_service_principal_delegated_permission_grant',
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
    this._claimValues = config.claimValues;
    this._id = config.id;
    this._resourceServicePrincipalObjectId = config.resourceServicePrincipalObjectId;
    this._servicePrincipalObjectId = config.servicePrincipalObjectId;
    this._userObjectId = config.userObjectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // claim_values - computed: false, optional: false, required: true
  private _claimValues?: string[]; 
  public get claimValues() {
    return cdktf.Fn.tolist(this.getListAttribute('claim_values'));
  }
  public set claimValues(value: string[]) {
    this._claimValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimValuesInput() {
    return this._claimValues;
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

  // resource_service_principal_object_id - computed: false, optional: false, required: true
  private _resourceServicePrincipalObjectId?: string; 
  public get resourceServicePrincipalObjectId() {
    return this.getStringAttribute('resource_service_principal_object_id');
  }
  public set resourceServicePrincipalObjectId(value: string) {
    this._resourceServicePrincipalObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServicePrincipalObjectIdInput() {
    return this._resourceServicePrincipalObjectId;
  }

  // service_principal_object_id - computed: false, optional: false, required: true
  private _servicePrincipalObjectId?: string; 
  public get servicePrincipalObjectId() {
    return this.getStringAttribute('service_principal_object_id');
  }
  public set servicePrincipalObjectId(value: string) {
    this._servicePrincipalObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalObjectIdInput() {
    return this._servicePrincipalObjectId;
  }

  // user_object_id - computed: false, optional: true, required: false
  private _userObjectId?: string; 
  public get userObjectId() {
    return this.getStringAttribute('user_object_id');
  }
  public set userObjectId(value: string) {
    this._userObjectId = value;
  }
  public resetUserObjectId() {
    this._userObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userObjectIdInput() {
    return this._userObjectId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicePrincipalDelegatedPermissionGrantTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicePrincipalDelegatedPermissionGrantTimeouts) {
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
      claim_values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._claimValues),
      id: cdktf.stringToTerraform(this._id),
      resource_service_principal_object_id: cdktf.stringToTerraform(this._resourceServicePrincipalObjectId),
      service_principal_object_id: cdktf.stringToTerraform(this._servicePrincipalObjectId),
      user_object_id: cdktf.stringToTerraform(this._userObjectId),
      timeouts: servicePrincipalDelegatedPermissionGrantTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      claim_values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._claimValues),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_service_principal_object_id: {
        value: cdktf.stringToHclTerraform(this._resourceServicePrincipalObjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_principal_object_id: {
        value: cdktf.stringToHclTerraform(this._servicePrincipalObjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_object_id: {
        value: cdktf.stringToHclTerraform(this._userObjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: servicePrincipalDelegatedPermissionGrantTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicePrincipalDelegatedPermissionGrantTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
