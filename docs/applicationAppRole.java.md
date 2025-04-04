# `applicationAppRole` Submodule <a name="`applicationAppRole` Submodule" id="@cdktf/provider-azuread.applicationAppRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationAppRoleA <a name="ApplicationAppRoleA" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role azuread_application_app_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_app_role.ApplicationAppRoleA;

ApplicationAppRoleA.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .allowedMemberTypes(java.util.List<java.lang.String>)
    .applicationId(java.lang.String)
    .description(java.lang.String)
    .displayName(java.lang.String)
    .roleId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApplicationAppRoleTimeouts)
//  .value(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.allowedMemberTypes">allowedMemberTypes</a></code> | <code>java.util.List<java.lang.String></code> | Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The resource ID of the application to which this app role should be applied. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name for the app role that appears during app role assignment and in consent experiences. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.roleId">roleId</a></code> | <code>java.lang.String</code> | The unique identifier of the app role. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#id ApplicationAppRoleA#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts">ApplicationAppRoleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | The value that is used for the `roles` claim in ID tokens and OAuth access tokens that are authenticating an assigned service or user principal. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedMemberTypes`<sup>Required</sup> <a name="allowedMemberTypes" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.allowedMemberTypes"></a>

- *Type:* java.util.List<java.lang.String>

Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#allowed_member_types ApplicationAppRoleA#allowed_member_types}

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

The resource ID of the application to which this app role should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#application_id ApplicationAppRoleA#application_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#description ApplicationAppRoleA#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name for the app role that appears during app role assignment and in consent experiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#display_name ApplicationAppRoleA#display_name}

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.roleId"></a>

- *Type:* java.lang.String

The unique identifier of the app role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#role_id ApplicationAppRoleA#role_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#id ApplicationAppRoleA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts">ApplicationAppRoleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#timeouts ApplicationAppRoleA#timeouts}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.Initializer.parameter.value"></a>

- *Type:* java.lang.String

The value that is used for the `roles` claim in ID tokens and OAuth access tokens that are authenticating an assigned service or user principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#value ApplicationAppRoleA#value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.putTimeouts"></a>

```java
public void putTimeouts(ApplicationAppRoleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts">ApplicationAppRoleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.resetValue"></a>

```java
public void resetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationAppRoleA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_app_role.ApplicationAppRoleA;

ApplicationAppRoleA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_app_role.ApplicationAppRoleA;

ApplicationAppRoleA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_app_role.ApplicationAppRoleA;

ApplicationAppRoleA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_app_role.ApplicationAppRoleA;

ApplicationAppRoleA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationAppRoleA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApplicationAppRoleA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationAppRoleA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationAppRoleA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationAppRoleA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference">ApplicationAppRoleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.allowedMemberTypesInput">allowedMemberTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.roleIdInput">roleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts">ApplicationAppRoleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.allowedMemberTypes">allowedMemberTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.timeouts"></a>

```java
public ApplicationAppRoleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference">ApplicationAppRoleTimeoutsOutputReference</a>

---

##### `allowedMemberTypesInput`<sup>Optional</sup> <a name="allowedMemberTypesInput" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.allowedMemberTypesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedMemberTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.roleIdInput"></a>

```java
public java.lang.String getRoleIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts">ApplicationAppRoleTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `allowedMemberTypes`<sup>Required</sup> <a name="allowedMemberTypes" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.allowedMemberTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedMemberTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationAppRoleAConfig <a name="ApplicationAppRoleAConfig" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_app_role.ApplicationAppRoleAConfig;

ApplicationAppRoleAConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .allowedMemberTypes(java.util.List<java.lang.String>)
    .applicationId(java.lang.String)
    .description(java.lang.String)
    .displayName(java.lang.String)
    .roleId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApplicationAppRoleTimeouts)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.allowedMemberTypes">allowedMemberTypes</a></code> | <code>java.util.List<java.lang.String></code> | Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The resource ID of the application to which this app role should be applied. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name for the app role that appears during app role assignment and in consent experiences. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.roleId">roleId</a></code> | <code>java.lang.String</code> | The unique identifier of the app role. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#id ApplicationAppRoleA#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts">ApplicationAppRoleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.value">value</a></code> | <code>java.lang.String</code> | The value that is used for the `roles` claim in ID tokens and OAuth access tokens that are authenticating an assigned service or user principal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedMemberTypes`<sup>Required</sup> <a name="allowedMemberTypes" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.allowedMemberTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedMemberTypes();
```

- *Type:* java.util.List<java.lang.String>

Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#allowed_member_types ApplicationAppRoleA#allowed_member_types}

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The resource ID of the application to which this app role should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#application_id ApplicationAppRoleA#application_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#description ApplicationAppRoleA#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name for the app role that appears during app role assignment and in consent experiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#display_name ApplicationAppRoleA#display_name}

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

The unique identifier of the app role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#role_id ApplicationAppRoleA#role_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#id ApplicationAppRoleA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.timeouts"></a>

```java
public ApplicationAppRoleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts">ApplicationAppRoleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#timeouts ApplicationAppRoleA#timeouts}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleAConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value that is used for the `roles` claim in ID tokens and OAuth access tokens that are authenticating an assigned service or user principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#value ApplicationAppRoleA#value}

---

### ApplicationAppRoleTimeouts <a name="ApplicationAppRoleTimeouts" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_app_role.ApplicationAppRoleTimeouts;

ApplicationAppRoleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#create ApplicationAppRoleA#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#delete ApplicationAppRoleA#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#read ApplicationAppRoleA#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#update ApplicationAppRoleA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#create ApplicationAppRoleA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#delete ApplicationAppRoleA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#read ApplicationAppRoleA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.3.0/docs/resources/application_app_role#update ApplicationAppRoleA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationAppRoleTimeoutsOutputReference <a name="ApplicationAppRoleTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_app_role.ApplicationAppRoleTimeoutsOutputReference;

new ApplicationAppRoleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts">ApplicationAppRoleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.applicationAppRole.ApplicationAppRoleTimeouts">ApplicationAppRoleTimeouts</a>

---



