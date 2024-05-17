# `dataAzureadDirectoryRoleTemplates` Submodule <a name="`dataAzureadDirectoryRoleTemplates` Submodule" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadDirectoryRoleTemplates <a name="DataAzureadDirectoryRoleTemplates" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/directory_role_templates azuread_directory_role_templates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_role_templates

dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates(
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
  timeouts: DataAzureadDirectoryRoleTemplatesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/directory_role_templates#id DataAzureadDirectoryRoleTemplates#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts">DataAzureadDirectoryRoleTemplatesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/directory_role_templates#id DataAzureadDirectoryRoleTemplates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts">DataAzureadDirectoryRoleTemplatesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/directory_role_templates#timeouts DataAzureadDirectoryRoleTemplates#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/directory_role_templates#read DataAzureadDirectoryRoleTemplates#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzureadDirectoryRoleTemplates resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_role_templates

dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_role_templates

dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_role_templates

dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_role_templates

dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzureadDirectoryRoleTemplates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzureadDirectoryRoleTemplates to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzureadDirectoryRoleTemplates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/directory_role_templates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadDirectoryRoleTemplates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.objectIds">object_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.roleTemplates">role_templates</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList">DataAzureadDirectoryRoleTemplatesRoleTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference">DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts">DataAzureadDirectoryRoleTemplatesTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `object_ids`<sup>Required</sup> <a name="object_ids" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.objectIds"></a>

```python
object_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_templates`<sup>Required</sup> <a name="role_templates" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.roleTemplates"></a>

```python
role_templates: DataAzureadDirectoryRoleTemplatesRoleTemplatesList
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList">DataAzureadDirectoryRoleTemplatesRoleTemplatesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.timeouts"></a>

```python
timeouts: DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference">DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzureadDirectoryRoleTemplatesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts">DataAzureadDirectoryRoleTemplatesTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplates.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadDirectoryRoleTemplatesConfig <a name="DataAzureadDirectoryRoleTemplatesConfig" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_role_templates

dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  timeouts: DataAzureadDirectoryRoleTemplatesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/directory_role_templates#id DataAzureadDirectoryRoleTemplates#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts">DataAzureadDirectoryRoleTemplatesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/directory_role_templates#id DataAzureadDirectoryRoleTemplates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesConfig.property.timeouts"></a>

```python
timeouts: DataAzureadDirectoryRoleTemplatesTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts">DataAzureadDirectoryRoleTemplatesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/directory_role_templates#timeouts DataAzureadDirectoryRoleTemplates#timeouts}

---

### DataAzureadDirectoryRoleTemplatesRoleTemplates <a name="DataAzureadDirectoryRoleTemplatesRoleTemplates" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplates.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_role_templates

dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplates()
```


### DataAzureadDirectoryRoleTemplatesTimeouts <a name="DataAzureadDirectoryRoleTemplatesTimeouts" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_role_templates

dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/directory_role_templates#read DataAzureadDirectoryRoleTemplates#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.50.0/docs/data-sources/directory_role_templates#read DataAzureadDirectoryRoleTemplates#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadDirectoryRoleTemplatesRoleTemplatesList <a name="DataAzureadDirectoryRoleTemplatesRoleTemplatesList" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_role_templates

dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference <a name="DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_role_templates

dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplates">DataAzureadDirectoryRoleTemplatesRoleTemplates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplatesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzureadDirectoryRoleTemplatesRoleTemplates
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesRoleTemplates">DataAzureadDirectoryRoleTemplatesRoleTemplates</a>

---


### DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference <a name="DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_directory_role_templates

dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts">DataAzureadDirectoryRoleTemplatesTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzureadDirectoryRoleTemplatesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadDirectoryRoleTemplates.DataAzureadDirectoryRoleTemplatesTimeouts">DataAzureadDirectoryRoleTemplatesTimeouts</a>]

---



