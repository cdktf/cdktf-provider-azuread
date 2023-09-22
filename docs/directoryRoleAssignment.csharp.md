# `azuread_directory_role_assignment`

Refer to the Terraform Registory for docs: [`azuread_directory_role_assignment`](https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment).

# `directoryRoleAssignment` Submodule <a name="`directoryRoleAssignment` Submodule" id="@cdktf/provider-azuread.directoryRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryRoleAssignment <a name="DirectoryRoleAssignment" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment azuread_directory_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DirectoryRoleAssignment(Construct Scope, string Id, DirectoryRoleAssignmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig">DirectoryRoleAssignmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig">DirectoryRoleAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetAppScopeId">ResetAppScopeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetAppScopeObjectId">ResetAppScopeObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetDirectoryScopeId">ResetDirectoryScopeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetDirectoryScopeObjectId">ResetDirectoryScopeObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.putTimeouts"></a>

```csharp
private void PutTimeouts(DirectoryRoleAssignmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a>

---

##### `ResetAppScopeId` <a name="ResetAppScopeId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetAppScopeId"></a>

```csharp
private void ResetAppScopeId()
```

##### `ResetAppScopeObjectId` <a name="ResetAppScopeObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetAppScopeObjectId"></a>

```csharp
private void ResetAppScopeObjectId()
```

##### `ResetDirectoryScopeId` <a name="ResetDirectoryScopeId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetDirectoryScopeId"></a>

```csharp
private void ResetDirectoryScopeId()
```

##### `ResetDirectoryScopeObjectId` <a name="ResetDirectoryScopeObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetDirectoryScopeObjectId"></a>

```csharp
private void ResetDirectoryScopeObjectId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DirectoryRoleAssignment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DirectoryRoleAssignment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

DirectoryRoleAssignment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference">DirectoryRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeIdInput">AppScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeObjectIdInput">AppScopeObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeIdInput">DirectoryScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeObjectIdInput">DirectoryScopeObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.principalObjectIdInput">PrincipalObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.roleIdInput">RoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeId">AppScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeObjectId">AppScopeObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeId">DirectoryScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeObjectId">DirectoryScopeObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.principalObjectId">PrincipalObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.timeouts"></a>

```csharp
public DirectoryRoleAssignmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference">DirectoryRoleAssignmentTimeoutsOutputReference</a>

---

##### `AppScopeIdInput`<sup>Optional</sup> <a name="AppScopeIdInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeIdInput"></a>

```csharp
public string AppScopeIdInput { get; }
```

- *Type:* string

---

##### `AppScopeObjectIdInput`<sup>Optional</sup> <a name="AppScopeObjectIdInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeObjectIdInput"></a>

```csharp
public string AppScopeObjectIdInput { get; }
```

- *Type:* string

---

##### `DirectoryScopeIdInput`<sup>Optional</sup> <a name="DirectoryScopeIdInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeIdInput"></a>

```csharp
public string DirectoryScopeIdInput { get; }
```

- *Type:* string

---

##### `DirectoryScopeObjectIdInput`<sup>Optional</sup> <a name="DirectoryScopeObjectIdInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeObjectIdInput"></a>

```csharp
public string DirectoryScopeObjectIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalObjectIdInput`<sup>Optional</sup> <a name="PrincipalObjectIdInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.principalObjectIdInput"></a>

```csharp
public string PrincipalObjectIdInput { get; }
```

- *Type:* string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.roleIdInput"></a>

```csharp
public string RoleIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AppScopeId`<sup>Required</sup> <a name="AppScopeId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeId"></a>

```csharp
public string AppScopeId { get; }
```

- *Type:* string

---

##### `AppScopeObjectId`<sup>Required</sup> <a name="AppScopeObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.appScopeObjectId"></a>

```csharp
public string AppScopeObjectId { get; }
```

- *Type:* string

---

##### `DirectoryScopeId`<sup>Required</sup> <a name="DirectoryScopeId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeId"></a>

```csharp
public string DirectoryScopeId { get; }
```

- *Type:* string

---

##### `DirectoryScopeObjectId`<sup>Required</sup> <a name="DirectoryScopeObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.directoryScopeObjectId"></a>

```csharp
public string DirectoryScopeObjectId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrincipalObjectId`<sup>Required</sup> <a name="PrincipalObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.principalObjectId"></a>

```csharp
public string PrincipalObjectId { get; }
```

- *Type:* string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryRoleAssignmentConfig <a name="DirectoryRoleAssignmentConfig" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DirectoryRoleAssignmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PrincipalObjectId,
    string RoleId,
    string AppScopeId = null,
    string AppScopeObjectId = null,
    string DirectoryScopeId = null,
    string DirectoryScopeObjectId = null,
    string Id = null,
    DirectoryRoleAssignmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.principalObjectId">PrincipalObjectId</a></code> | <code>string</code> | The object ID of the member principal. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.roleId">RoleId</a></code> | <code>string</code> | The object ID of the directory role for this assignment. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.appScopeId">AppScopeId</a></code> | <code>string</code> | Identifier of the app-specific scope when the assignment scope is app-specific. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.appScopeObjectId">AppScopeObjectId</a></code> | <code>string</code> | Identifier of the app-specific scope when the assignment scope is app-specific. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.directoryScopeId">DirectoryScopeId</a></code> | <code>string</code> | Identifier of the directory object representing the scope of the assignment. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.directoryScopeObjectId">DirectoryScopeObjectId</a></code> | <code>string</code> | Identifier of the directory object representing the scope of the assignment. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#id DirectoryRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PrincipalObjectId`<sup>Required</sup> <a name="PrincipalObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.principalObjectId"></a>

```csharp
public string PrincipalObjectId { get; set; }
```

- *Type:* string

The object ID of the member principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#principal_object_id DirectoryRoleAssignment#principal_object_id}

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.roleId"></a>

```csharp
public string RoleId { get; set; }
```

- *Type:* string

The object ID of the directory role for this assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#role_id DirectoryRoleAssignment#role_id}

---

##### `AppScopeId`<sup>Optional</sup> <a name="AppScopeId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.appScopeId"></a>

```csharp
public string AppScopeId { get; set; }
```

- *Type:* string

Identifier of the app-specific scope when the assignment scope is app-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#app_scope_id DirectoryRoleAssignment#app_scope_id}

---

##### `AppScopeObjectId`<sup>Optional</sup> <a name="AppScopeObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.appScopeObjectId"></a>

```csharp
public string AppScopeObjectId { get; set; }
```

- *Type:* string

Identifier of the app-specific scope when the assignment scope is app-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#app_scope_object_id DirectoryRoleAssignment#app_scope_object_id}

---

##### `DirectoryScopeId`<sup>Optional</sup> <a name="DirectoryScopeId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.directoryScopeId"></a>

```csharp
public string DirectoryScopeId { get; set; }
```

- *Type:* string

Identifier of the directory object representing the scope of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#directory_scope_id DirectoryRoleAssignment#directory_scope_id}

---

##### `DirectoryScopeObjectId`<sup>Optional</sup> <a name="DirectoryScopeObjectId" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.directoryScopeObjectId"></a>

```csharp
public string DirectoryScopeObjectId { get; set; }
```

- *Type:* string

Identifier of the directory object representing the scope of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#directory_scope_object_id DirectoryRoleAssignment#directory_scope_object_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#id DirectoryRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentConfig.property.timeouts"></a>

```csharp
public DirectoryRoleAssignmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts">DirectoryRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#timeouts DirectoryRoleAssignment#timeouts}

---

### DirectoryRoleAssignmentTimeouts <a name="DirectoryRoleAssignmentTimeouts" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DirectoryRoleAssignmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#create DirectoryRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#delete DirectoryRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#read DirectoryRoleAssignment#read}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#update DirectoryRoleAssignment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#create DirectoryRoleAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#delete DirectoryRoleAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#read DirectoryRoleAssignment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.43.0/docs/resources/directory_role_assignment#update DirectoryRoleAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryRoleAssignmentTimeoutsOutputReference <a name="DirectoryRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new DirectoryRoleAssignmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.directoryRoleAssignment.DirectoryRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



