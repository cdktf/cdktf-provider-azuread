# `dataAzureadDirectoryRoles` Submodule <a name="`dataAzureadDirectoryRoles` Submodule" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadDirectoryRoles <a name="DataAzureadDirectoryRoles" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/data-sources/directory_roles azuread_directory_roles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_roles

dataAzureadDirectoryRoles.DataAzureadDirectoryRoles(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  timeouts: DataAzureadDirectoryRolesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/data-sources/directory_roles#id DataAzureadDirectoryRoles#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeouts">DataAzureadDirectoryRolesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/data-sources/directory_roles#id DataAzureadDirectoryRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeouts">DataAzureadDirectoryRolesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/data-sources/directory_roles#timeouts DataAzureadDirectoryRoles#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/data-sources/directory_roles#read DataAzureadDirectoryRoles#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzureadDirectoryRoles resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_roles

dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_roles

dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_roles

dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_roles

dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzureadDirectoryRoles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzureadDirectoryRoles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzureadDirectoryRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/data-sources/directory_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadDirectoryRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.objectIds">object_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList">DataAzureadDirectoryRolesRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.templateIds">template_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference">DataAzureadDirectoryRolesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeouts">DataAzureadDirectoryRolesTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `object_ids`<sup>Required</sup> <a name="object_ids" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.objectIds"></a>

```python
object_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.roles"></a>

```python
roles: DataAzureadDirectoryRolesRolesList
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList">DataAzureadDirectoryRolesRolesList</a>

---

##### `template_ids`<sup>Required</sup> <a name="template_ids" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.templateIds"></a>

```python
template_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.timeouts"></a>

```python
timeouts: DataAzureadDirectoryRolesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference">DataAzureadDirectoryRolesTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzureadDirectoryRolesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeouts">DataAzureadDirectoryRolesTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRoles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadDirectoryRolesConfig <a name="DataAzureadDirectoryRolesConfig" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_roles

dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  timeouts: DataAzureadDirectoryRolesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/data-sources/directory_roles#id DataAzureadDirectoryRoles#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeouts">DataAzureadDirectoryRolesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/data-sources/directory_roles#id DataAzureadDirectoryRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesConfig.property.timeouts"></a>

```python
timeouts: DataAzureadDirectoryRolesTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeouts">DataAzureadDirectoryRolesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/data-sources/directory_roles#timeouts DataAzureadDirectoryRoles#timeouts}

---

### DataAzureadDirectoryRolesRoles <a name="DataAzureadDirectoryRolesRoles" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_roles

dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRoles()
```


### DataAzureadDirectoryRolesTimeouts <a name="DataAzureadDirectoryRolesTimeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_roles

dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/data-sources/directory_roles#read DataAzureadDirectoryRoles#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.49.0/docs/data-sources/directory_roles#read DataAzureadDirectoryRoles#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadDirectoryRolesRolesList <a name="DataAzureadDirectoryRolesRolesList" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_roles

dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzureadDirectoryRolesRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzureadDirectoryRolesRolesOutputReference <a name="DataAzureadDirectoryRolesRolesOutputReference" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_roles

dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRoles">DataAzureadDirectoryRolesRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzureadDirectoryRolesRoles
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesRoles">DataAzureadDirectoryRolesRoles</a>

---


### DataAzureadDirectoryRolesTimeoutsOutputReference <a name="DataAzureadDirectoryRolesTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_roles

dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeouts">DataAzureadDirectoryRolesTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzureadDirectoryRolesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoles.DataAzureadDirectoryRolesTimeouts">DataAzureadDirectoryRolesTimeouts</a>]

---



