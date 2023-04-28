# `azuread_administrative_unit_role_member`

Refer to the Terraform Registory for docs: [`azuread_administrative_unit_role_member`](https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member).

# `administrativeUnitRoleMember` Submodule <a name="`administrativeUnitRoleMember` Submodule" id="@cdktf/provider-azuread.administrativeUnitRoleMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdministrativeUnitRoleMember <a name="AdministrativeUnitRoleMember" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member azuread_administrative_unit_role_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new AdministrativeUnitRoleMember(Construct Scope, string Id, AdministrativeUnitRoleMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig">AdministrativeUnitRoleMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig">AdministrativeUnitRoleMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts"></a>

```csharp
private void PutTimeouts(AdministrativeUnitRoleMemberTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

AdministrativeUnitRoleMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

AdministrativeUnitRoleMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

AdministrativeUnitRoleMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference">AdministrativeUnitRoleMemberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectIdInput">AdministrativeUnitObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectIdInput">MemberObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectIdInput">RoleObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectId">AdministrativeUnitObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectId">MemberObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectId">RoleObjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeouts"></a>

```csharp
public AdministrativeUnitRoleMemberTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference">AdministrativeUnitRoleMemberTimeoutsOutputReference</a>

---

##### `AdministrativeUnitObjectIdInput`<sup>Optional</sup> <a name="AdministrativeUnitObjectIdInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectIdInput"></a>

```csharp
public string AdministrativeUnitObjectIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberObjectIdInput`<sup>Optional</sup> <a name="MemberObjectIdInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectIdInput"></a>

```csharp
public string MemberObjectIdInput { get; }
```

- *Type:* string

---

##### `RoleObjectIdInput`<sup>Optional</sup> <a name="RoleObjectIdInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectIdInput"></a>

```csharp
public string RoleObjectIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AdministrativeUnitObjectId`<sup>Required</sup> <a name="AdministrativeUnitObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.administrativeUnitObjectId"></a>

```csharp
public string AdministrativeUnitObjectId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MemberObjectId`<sup>Required</sup> <a name="MemberObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.memberObjectId"></a>

```csharp
public string MemberObjectId { get; }
```

- *Type:* string

---

##### `RoleObjectId`<sup>Required</sup> <a name="RoleObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.roleObjectId"></a>

```csharp
public string RoleObjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdministrativeUnitRoleMemberConfig <a name="AdministrativeUnitRoleMemberConfig" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new AdministrativeUnitRoleMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AdministrativeUnitObjectId,
    string MemberObjectId,
    string RoleObjectId,
    string Id = null,
    AdministrativeUnitRoleMemberTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.administrativeUnitObjectId">AdministrativeUnitObjectId</a></code> | <code>string</code> | The object ID of the administrative unit. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.memberObjectId">MemberObjectId</a></code> | <code>string</code> | The object ID of the member. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.roleObjectId">RoleObjectId</a></code> | <code>string</code> | The object ID of the directory role. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member#id AdministrativeUnitRoleMember#id}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AdministrativeUnitObjectId`<sup>Required</sup> <a name="AdministrativeUnitObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.administrativeUnitObjectId"></a>

```csharp
public string AdministrativeUnitObjectId { get; set; }
```

- *Type:* string

The object ID of the administrative unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member#administrative_unit_object_id AdministrativeUnitRoleMember#administrative_unit_object_id}

---

##### `MemberObjectId`<sup>Required</sup> <a name="MemberObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.memberObjectId"></a>

```csharp
public string MemberObjectId { get; set; }
```

- *Type:* string

The object ID of the member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member#member_object_id AdministrativeUnitRoleMember#member_object_id}

---

##### `RoleObjectId`<sup>Required</sup> <a name="RoleObjectId" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.roleObjectId"></a>

```csharp
public string RoleObjectId { get; set; }
```

- *Type:* string

The object ID of the directory role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member#role_object_id AdministrativeUnitRoleMember#role_object_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member#id AdministrativeUnitRoleMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberConfig.property.timeouts"></a>

```csharp
public AdministrativeUnitRoleMemberTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts">AdministrativeUnitRoleMemberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member#timeouts AdministrativeUnitRoleMember#timeouts}

---

### AdministrativeUnitRoleMemberTimeouts <a name="AdministrativeUnitRoleMemberTimeouts" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new AdministrativeUnitRoleMemberTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member#create AdministrativeUnitRoleMember#create}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member#delete AdministrativeUnitRoleMember#delete}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member#read AdministrativeUnitRoleMember#read}. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member#update AdministrativeUnitRoleMember#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member#create AdministrativeUnitRoleMember#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member#delete AdministrativeUnitRoleMember#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member#read AdministrativeUnitRoleMember#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.38.0/docs/resources/administrative_unit_role_member#update AdministrativeUnitRoleMember#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AdministrativeUnitRoleMemberTimeoutsOutputReference <a name="AdministrativeUnitRoleMemberTimeoutsOutputReference" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azuread;

new AdministrativeUnitRoleMemberTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.administrativeUnitRoleMember.AdministrativeUnitRoleMemberTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



