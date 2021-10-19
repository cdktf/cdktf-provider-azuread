// https://www.terraform.io/docs/providers/azuread/r/application_password.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationPasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * The object ID of the application for which this password should be created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#application_object_id ApplicationPassword#application_object_id}
  */
  readonly applicationObjectId: string;
  /**
  * A display name for the password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#display_name ApplicationPassword#display_name}
  */
  readonly displayName?: string;
  /**
  * The end date until which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#end_date ApplicationPassword#end_date}
  */
  readonly endDate?: string;
  /**
  * A relative duration for which the password is valid until, for example `240h` (10 days) or `2400h30m`. Changing this field forces a new resource to be created
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#end_date_relative ApplicationPassword#end_date_relative}
  */
  readonly endDateRelative?: string;
  /**
  * Arbitrary map of values that, when changed, will trigger rotation of the password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#rotate_when_changed ApplicationPassword#rotate_when_changed}
  */
  readonly rotateWhenChanged?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The start date from which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#start_date ApplicationPassword#start_date}
  */
  readonly startDate?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#timeouts ApplicationPassword#timeouts}
  */
  readonly timeouts?: ApplicationPasswordTimeouts;
}
export interface ApplicationPasswordTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#create ApplicationPassword#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#delete ApplicationPassword#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#read ApplicationPassword#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html#update ApplicationPassword#update}
  */
  readonly update?: string;
}

function applicationPasswordTimeoutsToTerraform(struct?: ApplicationPasswordTimeoutsOutputReference | ApplicationPasswordTimeouts): any {
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

export class ApplicationPasswordTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html azuread_application_password}
*/
export class ApplicationPassword extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_application_password";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/application_password.html azuread_application_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationPasswordConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationPasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_application_password',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationObjectId = config.applicationObjectId;
    this._displayName = config.displayName;
    this._endDate = config.endDate;
    this._endDateRelative = config.endDateRelative;
    this._rotateWhenChanged = config.rotateWhenChanged;
    this._startDate = config.startDate;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string | undefined; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string | undefined; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string | undefined) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate
  }

  // end_date_relative - computed: false, optional: true, required: false
  private _endDateRelative?: string | undefined; 
  public get endDateRelative() {
    return this.getStringAttribute('end_date_relative');
  }
  public set endDateRelative(value: string | undefined) {
    this._endDateRelative = value;
  }
  public resetEndDateRelative() {
    this._endDateRelative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateRelativeInput() {
    return this._endDateRelative
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // rotate_when_changed - computed: false, optional: true, required: false
  private _rotateWhenChanged?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get rotateWhenChanged() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rotate_when_changed') as any;
  }
  public set rotateWhenChanged(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._rotateWhenChanged = value;
  }
  public resetRotateWhenChanged() {
    this._rotateWhenChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateWhenChangedInput() {
    return this._rotateWhenChanged
  }

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string | undefined; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string | undefined) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApplicationPasswordTimeouts | undefined; 
  private __timeoutsOutput = new ApplicationPasswordTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApplicationPasswordTimeouts | undefined) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      end_date: cdktf.stringToTerraform(this._endDate),
      end_date_relative: cdktf.stringToTerraform(this._endDateRelative),
      rotate_when_changed: cdktf.hashMapper(cdktf.anyToTerraform)(this._rotateWhenChanged),
      start_date: cdktf.stringToTerraform(this._startDate),
      timeouts: applicationPasswordTimeoutsToTerraform(this._timeouts),
    };
  }
}
