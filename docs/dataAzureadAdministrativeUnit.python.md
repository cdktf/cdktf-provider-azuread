# `dataAzureadAdministrativeUnit` Submodule <a name="`dataAzureadAdministrativeUnit` Submodule" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadAdministrativeUnit <a name="DataAzureadAdministrativeUnit" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit azuread_administrative_unit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_administrative_unit

dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  id: str = None,
  object_id: str = None,
  timeouts: DataAzureadAdministrativeUnitTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#id DataAzureadAdministrativeUnit#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | The object ID of the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#display_name DataAzureadAdministrativeUnit#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#id DataAzureadAdministrativeUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.objectId"></a>

- *Type:* str

The object ID of the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#object_id DataAzureadAdministrativeUnit#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#timeouts DataAzureadAdministrativeUnit#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetObjectId">reset_object_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#create DataAzureadAdministrativeUnit#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#delete DataAzureadAdministrativeUnit#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#read DataAzureadAdministrativeUnit#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#update DataAzureadAdministrativeUnit#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_object_id` <a name="reset_object_id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetObjectId"></a>

```python
def reset_object_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzureadAdministrativeUnit resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_administrative_unit

dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_administrative_unit

dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_administrative_unit

dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_administrative_unit

dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzureadAdministrativeUnit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzureadAdministrativeUnit to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzureadAdministrativeUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadAdministrativeUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference">DataAzureadAdministrativeUnitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.timeouts"></a>

```python
timeouts: DataAzureadAdministrativeUnitTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference">DataAzureadAdministrativeUnitTimeoutsOutputReference</a>

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzureadAdministrativeUnitTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadAdministrativeUnitConfig <a name="DataAzureadAdministrativeUnitConfig" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_administrative_unit

dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  id: str = None,
  object_id: str = None,
  timeouts: DataAzureadAdministrativeUnitTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#id DataAzureadAdministrativeUnit#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.objectId">object_id</a></code> | <code>str</code> | The object ID of the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#display_name DataAzureadAdministrativeUnit#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#id DataAzureadAdministrativeUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object_id`<sup>Optional</sup> <a name="object_id" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

The object ID of the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#object_id DataAzureadAdministrativeUnit#object_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitConfig.property.timeouts"></a>

```python
timeouts: DataAzureadAdministrativeUnitTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#timeouts DataAzureadAdministrativeUnit#timeouts}

---

### DataAzureadAdministrativeUnitTimeouts <a name="DataAzureadAdministrativeUnitTimeouts" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_administrative_unit

dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#create DataAzureadAdministrativeUnit#create}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#delete DataAzureadAdministrativeUnit#delete}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#read DataAzureadAdministrativeUnit#read}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#update DataAzureadAdministrativeUnit#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#create DataAzureadAdministrativeUnit#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#delete DataAzureadAdministrativeUnit#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#read DataAzureadAdministrativeUnit#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs/data-sources/administrative_unit#update DataAzureadAdministrativeUnit#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadAdministrativeUnitTimeoutsOutputReference <a name="DataAzureadAdministrativeUnitTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_administrative_unit

dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzureadAdministrativeUnitTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadAdministrativeUnit.DataAzureadAdministrativeUnitTimeouts">DataAzureadAdministrativeUnitTimeouts</a>]

---



