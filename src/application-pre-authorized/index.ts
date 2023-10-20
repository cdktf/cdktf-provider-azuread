/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationPreAuthorizedConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource ID of the application to which this pre-authorized application should be added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized#application_id ApplicationPreAuthorized#application_id}
  */
  readonly applicationId?: string;
  /**
  * The object ID of the application to which this pre-authorized application should be added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized#application_object_id ApplicationPreAuthorized#application_object_id}
  */
  readonly applicationObjectId?: string;
  /**
  * The application ID of the pre-authorized application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized#authorized_app_id ApplicationPreAuthorized#authorized_app_id}
  */
  readonly authorizedAppId?: string;
  /**
  * The client ID of the pre-authorized application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized#authorized_client_id ApplicationPreAuthorized#authorized_client_id}
  */
  readonly authorizedClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized#id ApplicationPreAuthorized#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IDs of the permission scopes required by the pre-authorized application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized#permission_ids ApplicationPreAuthorized#permission_ids}
  */
  readonly permissionIds: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized#timeouts ApplicationPreAuthorized#timeouts}
  */
  readonly timeouts?: ApplicationPreAuthorizedTimeouts;
}
export interface ApplicationPreAuthorizedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized#create ApplicationPreAuthorized#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized#delete ApplicationPreAuthorized#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized#read ApplicationPreAuthorized#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized#update ApplicationPreAuthorized#update}
  */
  readonly update?: string;
}

export function applicationPreAuthorizedTimeoutsToTerraform(struct?: ApplicationPreAuthorizedTimeouts | cdktf.IResolvable): any {
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

export class ApplicationPreAuthorizedTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationPreAuthorizedTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationPreAuthorizedTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized azuread_application_pre_authorized}
*/
export class ApplicationPreAuthorized extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_application_pre_authorized";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationPreAuthorized resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationPreAuthorized to import
  * @param importFromId The id of the existing ApplicationPreAuthorized that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationPreAuthorized to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread_application_pre_authorized", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.0/docs/resources/application_pre_authorized azuread_application_pre_authorized} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationPreAuthorizedConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationPreAuthorizedConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_application_pre_authorized',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.44.0',
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
    this._applicationId = config.applicationId;
    this._applicationObjectId = config.applicationObjectId;
    this._authorizedAppId = config.authorizedAppId;
    this._authorizedClientId = config.authorizedClientId;
    this._id = config.id;
    this._permissionIds = config.permissionIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // application_object_id - computed: true, optional: true, required: false
  private _applicationObjectId?: string; 
  public get applicationObjectId() {
    return this.getStringAttribute('application_object_id');
  }
  public set applicationObjectId(value: string) {
    this._applicationObjectId = value;
  }
  public resetApplicationObjectId() {
    this._applicationObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationObjectIdInput() {
    return this._applicationObjectId;
  }

  // authorized_app_id - computed: true, optional: true, required: false
  private _authorizedAppId?: string; 
  public get authorizedAppId() {
    return this.getStringAttribute('authorized_app_id');
  }
  public set authorizedAppId(value: string) {
    this._authorizedAppId = value;
  }
  public resetAuthorizedAppId() {
    this._authorizedAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedAppIdInput() {
    return this._authorizedAppId;
  }

  // authorized_client_id - computed: true, optional: true, required: false
  private _authorizedClientId?: string; 
  public get authorizedClientId() {
    return this.getStringAttribute('authorized_client_id');
  }
  public set authorizedClientId(value: string) {
    this._authorizedClientId = value;
  }
  public resetAuthorizedClientId() {
    this._authorizedClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedClientIdInput() {
    return this._authorizedClientId;
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

  // permission_ids - computed: false, optional: false, required: true
  private _permissionIds?: string[]; 
  public get permissionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_ids'));
  }
  public set permissionIds(value: string[]) {
    this._permissionIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionIdsInput() {
    return this._permissionIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApplicationPreAuthorizedTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApplicationPreAuthorizedTimeouts) {
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
      application_id: cdktf.stringToTerraform(this._applicationId),
      application_object_id: cdktf.stringToTerraform(this._applicationObjectId),
      authorized_app_id: cdktf.stringToTerraform(this._authorizedAppId),
      authorized_client_id: cdktf.stringToTerraform(this._authorizedClientId),
      id: cdktf.stringToTerraform(this._id),
      permission_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissionIds),
      timeouts: applicationPreAuthorizedTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
