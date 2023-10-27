# `data_azuread_application_published_app_ids`

Refer to the Terraform Registory for docs: [`data_azuread_application_published_app_ids`](https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/data-sources/application_published_app_ids).

# `dataAzureadApplicationPublishedAppIds` Submodule <a name="`dataAzureadApplicationPublishedAppIds` Submodule" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadApplicationPublishedAppIds <a name="DataAzureadApplicationPublishedAppIds" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/data-sources/application_published_app_ids azuread_application_published_app_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_published_app_ids

dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds(
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
  timeouts: DataAzureadApplicationPublishedAppIdsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/data-sources/application_published_app_ids#id DataAzureadApplicationPublishedAppIds#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/data-sources/application_published_app_ids#id DataAzureadApplicationPublishedAppIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/data-sources/application_published_app_ids#timeouts DataAzureadApplicationPublishedAppIds#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/data-sources/application_published_app_ids#read DataAzureadApplicationPublishedAppIds#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzureadApplicationPublishedAppIds resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_published_app_ids

dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_published_app_ids

dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_published_app_ids

dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_published_app_ids

dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzureadApplicationPublishedAppIds resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzureadApplicationPublishedAppIds to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzureadApplicationPublishedAppIds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/data-sources/application_published_app_ids#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzureadApplicationPublishedAppIds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.result">result</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference">DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.result"></a>

```python
result: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.timeouts"></a>

```python
timeouts: DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference">DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzureadApplicationPublishedAppIdsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIds.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadApplicationPublishedAppIdsConfig <a name="DataAzureadApplicationPublishedAppIdsConfig" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_published_app_ids

dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  timeouts: DataAzureadApplicationPublishedAppIdsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/data-sources/application_published_app_ids#id DataAzureadApplicationPublishedAppIds#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/data-sources/application_published_app_ids#id DataAzureadApplicationPublishedAppIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsConfig.property.timeouts"></a>

```python
timeouts: DataAzureadApplicationPublishedAppIdsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/data-sources/application_published_app_ids#timeouts DataAzureadApplicationPublishedAppIds#timeouts}

---

### DataAzureadApplicationPublishedAppIdsTimeouts <a name="DataAzureadApplicationPublishedAppIdsTimeouts" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_published_app_ids

dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/data-sources/application_published_app_ids#read DataAzureadApplicationPublishedAppIds#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/data-sources/application_published_app_ids#read DataAzureadApplicationPublishedAppIds#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference <a name="DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import data_azuread_application_published_app_ids

dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzureadApplicationPublishedAppIdsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.dataAzureadApplicationPublishedAppIds.DataAzureadApplicationPublishedAppIdsTimeouts">DataAzureadApplicationPublishedAppIdsTimeouts</a>]

---



