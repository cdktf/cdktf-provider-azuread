# `accessPackageCatalogRoleAssignment` Submodule <a name="`accessPackageCatalogRoleAssignment` Submodule" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPackageCatalogRoleAssignment <a name="AccessPackageCatalogRoleAssignment" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment azuread_access_package_catalog_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_catalog_role_assignment

accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  catalog_id: str,
  principal_object_id: str,
  role_id: str,
  id: str = None,
  timeouts: AccessPackageCatalogRoleAssignmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | The unique ID of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.principalObjectId">principal_object_id</a></code> | <code>str</code> | The object ID of the member principal. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.roleId">role_id</a></code> | <code>str</code> | The object ID of the catalog role for this assignment. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#id AccessPackageCatalogRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.catalogId"></a>

- *Type:* str

The unique ID of the access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#catalog_id AccessPackageCatalogRoleAssignment#catalog_id}

---

##### `principal_object_id`<sup>Required</sup> <a name="principal_object_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.principalObjectId"></a>

- *Type:* str

The object ID of the member principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#principal_object_id AccessPackageCatalogRoleAssignment#principal_object_id}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.roleId"></a>

- *Type:* str

The object ID of the catalog role for this assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#role_id AccessPackageCatalogRoleAssignment#role_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#id AccessPackageCatalogRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#timeouts AccessPackageCatalogRoleAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#create AccessPackageCatalogRoleAssignment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#delete AccessPackageCatalogRoleAssignment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#read AccessPackageCatalogRoleAssignment#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#update AccessPackageCatalogRoleAssignment#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccessPackageCatalogRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_catalog_role_assignment

accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_catalog_role_assignment

accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_catalog_role_assignment

accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_catalog_role_assignment

accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccessPackageCatalogRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccessPackageCatalogRoleAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccessPackageCatalogRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessPackageCatalogRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference">AccessPackageCatalogRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.principalObjectIdInput">principal_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.principalObjectId">principal_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.timeouts"></a>

```python
timeouts: AccessPackageCatalogRoleAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference">AccessPackageCatalogRoleAssignmentTimeoutsOutputReference</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_object_id_input`<sup>Optional</sup> <a name="principal_object_id_input" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.principalObjectIdInput"></a>

```python
principal_object_id_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AccessPackageCatalogRoleAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a>]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_object_id`<sup>Required</sup> <a name="principal_object_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.principalObjectId"></a>

```python
principal_object_id: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPackageCatalogRoleAssignmentConfig <a name="AccessPackageCatalogRoleAssignmentConfig" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_catalog_role_assignment

accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  catalog_id: str,
  principal_object_id: str,
  role_id: str,
  id: str = None,
  timeouts: AccessPackageCatalogRoleAssignmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | The unique ID of the access package catalog. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.principalObjectId">principal_object_id</a></code> | <code>str</code> | The object ID of the member principal. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.roleId">role_id</a></code> | <code>str</code> | The object ID of the catalog role for this assignment. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#id AccessPackageCatalogRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

The unique ID of the access package catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#catalog_id AccessPackageCatalogRoleAssignment#catalog_id}

---

##### `principal_object_id`<sup>Required</sup> <a name="principal_object_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.principalObjectId"></a>

```python
principal_object_id: str
```

- *Type:* str

The object ID of the member principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#principal_object_id AccessPackageCatalogRoleAssignment#principal_object_id}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

The object ID of the catalog role for this assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#role_id AccessPackageCatalogRoleAssignment#role_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#id AccessPackageCatalogRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentConfig.property.timeouts"></a>

```python
timeouts: AccessPackageCatalogRoleAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#timeouts AccessPackageCatalogRoleAssignment#timeouts}

---

### AccessPackageCatalogRoleAssignmentTimeouts <a name="AccessPackageCatalogRoleAssignmentTimeouts" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_catalog_role_assignment

accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#create AccessPackageCatalogRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#delete AccessPackageCatalogRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#read AccessPackageCatalogRoleAssignment#read}. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#update AccessPackageCatalogRoleAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#create AccessPackageCatalogRoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#delete AccessPackageCatalogRoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#read AccessPackageCatalogRoleAssignment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.5.0/docs/resources/access_package_catalog_role_assignment#update AccessPackageCatalogRoleAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPackageCatalogRoleAssignmentTimeoutsOutputReference <a name="AccessPackageCatalogRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import access_package_catalog_role_assignment

accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPackageCatalogRoleAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azuread.accessPackageCatalogRoleAssignment.AccessPackageCatalogRoleAssignmentTimeouts">AccessPackageCatalogRoleAssignmentTimeouts</a>]

---



