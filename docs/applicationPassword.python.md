# `applicationPassword` Submodule <a name="`applicationPassword` Submodule" id="@cdktf/provider-azuread.applicationPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationPasswordA <a name="ApplicationPasswordA" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password azuread_application_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_password

applicationPassword.ApplicationPasswordA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  display_name: str = None,
  end_date: str = None,
  end_date_relative: str = None,
  id: str = None,
  rotate_when_changed: typing.Mapping[str] = None,
  start_date: str = None,
  timeouts: ApplicationPasswordTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | The resource ID of the application for which this password should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A display name for the password. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.endDate">end_date</a></code> | <code>str</code> | The end date until which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.endDateRelative">end_date_relative</a></code> | <code>str</code> | A relative duration for which the password is valid until, for example `240h` (10 days) or `2400h30m`. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#id ApplicationPasswordA#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.rotateWhenChanged">rotate_when_changed</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger rotation of the password. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.startDate">start_date</a></code> | <code>str</code> | The start date from which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts">ApplicationPasswordTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.applicationId"></a>

- *Type:* str

The resource ID of the application for which this password should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#application_id ApplicationPasswordA#application_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.displayName"></a>

- *Type:* str

A display name for the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#display_name ApplicationPasswordA#display_name}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.endDate"></a>

- *Type:* str

The end date until which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#end_date ApplicationPasswordA#end_date}

---

##### `end_date_relative`<sup>Optional</sup> <a name="end_date_relative" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.endDateRelative"></a>

- *Type:* str

A relative duration for which the password is valid until, for example `240h` (10 days) or `2400h30m`.

Changing this field forces a new resource to be created

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#end_date_relative ApplicationPasswordA#end_date_relative}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#id ApplicationPasswordA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rotate_when_changed`<sup>Optional</sup> <a name="rotate_when_changed" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.rotateWhenChanged"></a>

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger rotation of the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#rotate_when_changed ApplicationPasswordA#rotate_when_changed}

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.startDate"></a>

- *Type:* str

The start date from which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#start_date ApplicationPasswordA#start_date}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts">ApplicationPasswordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#timeouts ApplicationPasswordA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetEndDateRelative">reset_end_date_relative</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetRotateWhenChanged">reset_rotate_when_changed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetStartDate">reset_start_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#create ApplicationPasswordA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#delete ApplicationPasswordA#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#read ApplicationPasswordA#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#update ApplicationPasswordA#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_end_date` <a name="reset_end_date" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_end_date_relative` <a name="reset_end_date_relative" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetEndDateRelative"></a>

```python
def reset_end_date_relative() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rotate_when_changed` <a name="reset_rotate_when_changed" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetRotateWhenChanged"></a>

```python
def reset_rotate_when_changed() -> None
```

##### `reset_start_date` <a name="reset_start_date" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetStartDate"></a>

```python
def reset_start_date() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApplicationPasswordA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import application_password

applicationPassword.ApplicationPasswordA.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import application_password

applicationPassword.ApplicationPasswordA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import application_password

applicationPassword.ApplicationPasswordA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import application_password

applicationPassword.ApplicationPasswordA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApplicationPasswordA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationPasswordA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationPasswordA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationPasswordA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference">ApplicationPasswordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.endDateRelativeInput">end_date_relative_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.rotateWhenChangedInput">rotate_when_changed_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts">ApplicationPasswordTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.endDateRelative">end_date_relative</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.rotateWhenChanged">rotate_when_changed</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.timeouts"></a>

```python
timeouts: ApplicationPasswordTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference">ApplicationPasswordTimeoutsOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `end_date_relative_input`<sup>Optional</sup> <a name="end_date_relative_input" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.endDateRelativeInput"></a>

```python
end_date_relative_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `rotate_when_changed_input`<sup>Optional</sup> <a name="rotate_when_changed_input" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.rotateWhenChangedInput"></a>

```python
rotate_when_changed_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApplicationPasswordTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts">ApplicationPasswordTimeouts</a>]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `end_date_relative`<sup>Required</sup> <a name="end_date_relative" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.endDateRelative"></a>

```python
end_date_relative: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rotate_when_changed`<sup>Required</sup> <a name="rotate_when_changed" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.rotateWhenChanged"></a>

```python
rotate_when_changed: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationPasswordAConfig <a name="ApplicationPasswordAConfig" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_password

applicationPassword.ApplicationPasswordAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  display_name: str = None,
  end_date: str = None,
  end_date_relative: str = None,
  id: str = None,
  rotate_when_changed: typing.Mapping[str] = None,
  start_date: str = None,
  timeouts: ApplicationPasswordTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.applicationId">application_id</a></code> | <code>str</code> | The resource ID of the application for which this password should be created. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.displayName">display_name</a></code> | <code>str</code> | A display name for the password. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.endDate">end_date</a></code> | <code>str</code> | The end date until which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.endDateRelative">end_date_relative</a></code> | <code>str</code> | A relative duration for which the password is valid until, for example `240h` (10 days) or `2400h30m`. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#id ApplicationPasswordA#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.rotateWhenChanged">rotate_when_changed</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger rotation of the password. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.startDate">start_date</a></code> | <code>str</code> | The start date from which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts">ApplicationPasswordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

The resource ID of the application for which this password should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#application_id ApplicationPasswordA#application_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A display name for the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#display_name ApplicationPasswordA#display_name}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

The end date until which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#end_date ApplicationPasswordA#end_date}

---

##### `end_date_relative`<sup>Optional</sup> <a name="end_date_relative" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.endDateRelative"></a>

```python
end_date_relative: str
```

- *Type:* str

A relative duration for which the password is valid until, for example `240h` (10 days) or `2400h30m`.

Changing this field forces a new resource to be created

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#end_date_relative ApplicationPasswordA#end_date_relative}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#id ApplicationPasswordA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rotate_when_changed`<sup>Optional</sup> <a name="rotate_when_changed" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.rotateWhenChanged"></a>

```python
rotate_when_changed: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger rotation of the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#rotate_when_changed ApplicationPasswordA#rotate_when_changed}

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

The start date from which the password is valid, formatted as an RFC3339 date string (e.g. `2018-01-01T01:02:03Z`). If this isn't specified, the current date is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#start_date ApplicationPasswordA#start_date}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordAConfig.property.timeouts"></a>

```python
timeouts: ApplicationPasswordTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts">ApplicationPasswordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#timeouts ApplicationPasswordA#timeouts}

---

### ApplicationPasswordTimeouts <a name="ApplicationPasswordTimeouts" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_password

applicationPassword.ApplicationPasswordTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#create ApplicationPasswordA#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#delete ApplicationPasswordA#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#read ApplicationPasswordA#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#update ApplicationPasswordA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#create ApplicationPasswordA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#delete ApplicationPasswordA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#read ApplicationPasswordA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/resources/application_password#update ApplicationPasswordA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationPasswordTimeoutsOutputReference <a name="ApplicationPasswordTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import application_password

applicationPassword.ApplicationPasswordTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts">ApplicationPasswordTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationPasswordTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.applicationPassword.ApplicationPasswordTimeouts">ApplicationPasswordTimeouts</a>]

---



