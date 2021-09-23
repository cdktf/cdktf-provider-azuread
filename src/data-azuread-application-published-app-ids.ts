// https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadApplicationPublishedAppIdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids.html#timeouts DataAzureadApplicationPublishedAppIds#timeouts}
  */
  readonly timeouts?: DataAzureadApplicationPublishedAppIdsTimeouts;
}
export interface DataAzureadApplicationPublishedAppIdsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids.html#read DataAzureadApplicationPublishedAppIds#read}
  */
  readonly read?: string;
}

function dataAzureadApplicationPublishedAppIdsTimeoutsToTerraform(struct?: DataAzureadApplicationPublishedAppIdsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids.html azuread_application_published_app_ids}
*/
export class DataAzureadApplicationPublishedAppIds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_application_published_app_ids";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids.html azuread_application_published_app_ids} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadApplicationPublishedAppIdsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadApplicationPublishedAppIdsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_application_published_app_ids',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // result - computed: true, optional: false, required: false
  public result(key: string): string {
    return new cdktf.StringMap(this, 'result').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzureadApplicationPublishedAppIdsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzureadApplicationPublishedAppIdsTimeouts ) {
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
      timeouts: dataAzureadApplicationPublishedAppIdsTimeoutsToTerraform(this._timeouts),
    };
  }
}
