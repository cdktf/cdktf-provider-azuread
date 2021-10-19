// https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationPreAuthorizedConfig extends cdktf.TerraformMetaArguments {
  /**
  * The object ID of the application to which this pre-authorized application should be added
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#application_object_id ApplicationPreAuthorized#application_object_id}
  */
  readonly applicationObjectId: string;
  /**
  * The application ID of the pre-authorized application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#authorized_app_id ApplicationPreAuthorized#authorized_app_id}
  */
  readonly authorizedAppId: string;
  /**
  * The IDs of the permission scopes required by the pre-authorized application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#permission_ids ApplicationPreAuthorized#permission_ids}
  */
  readonly permissionIds: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#timeouts ApplicationPreAuthorized#timeouts}
  */
  readonly timeouts?: ApplicationPreAuthorizedTimeouts;
}
export interface ApplicationPreAuthorizedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#create ApplicationPreAuthorized#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#delete ApplicationPreAuthorized#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#read ApplicationPreAuthorized#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html#update ApplicationPreAuthorized#update}
  */
  readonly update?: string;
}

function applicationPreAuthorizedTimeoutsToTerraform(struct?: ApplicationPreAuthorizedTimeoutsOutputReference | ApplicationPreAuthorizedTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html azuread_application_pre_authorized}
*/
export class ApplicationPreAuthorized extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_application_pre_authorized";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/application_pre_authorized.html azuread_application_pre_authorized} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationPreAuthorizedConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationPreAuthorizedConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_application_pre_authorized',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationObjectId = config.applicationObjectId;
    this._authorizedAppId = config.authorizedAppId;
    this._permissionIds = config.permissionIds;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_object_id - computed: false, optional: false, required: true
  private _applicationObjectId?: string; 
  public get applicationObjectId() {
    return this.getStringAttribute('application_object_id');
  }
  public set applicationObjectId(value: string) {
    this._applicationObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationObjectIdInput() {
    return this._applicationObjectId
  }

  // authorized_app_id - computed: false, optional: false, required: true
  private _authorizedAppId?: string; 
  public get authorizedAppId() {
    return this.getStringAttribute('authorized_app_id');
  }
  public set authorizedAppId(value: string) {
    this._authorizedAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedAppIdInput() {
    return this._authorizedAppId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permission_ids - computed: false, optional: false, required: true
  private _permissionIds?: string[]; 
  public get permissionIds() {
    return this.getListAttribute('permission_ids');
  }
  public set permissionIds(value: string[]) {
    this._permissionIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionIdsInput() {
    return this._permissionIds
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApplicationPreAuthorizedTimeouts | undefined; 
  private __timeoutsOutput = new ApplicationPreAuthorizedTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApplicationPreAuthorizedTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_object_id: cdktf.stringToTerraform(this._applicationObjectId),
      authorized_app_id: cdktf.stringToTerraform(this._authorizedAppId),
      permission_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._permissionIds),
      timeouts: applicationPreAuthorizedTimeoutsToTerraform(this._timeouts),
    };
  }
}
