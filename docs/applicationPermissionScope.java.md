# `applicationPermissionScope` Submodule <a name="`applicationPermissionScope` Submodule" id="@cdktf/provider-azuread.applicationPermissionScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationPermissionScope <a name="ApplicationPermissionScope" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope azuread_application_permission_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_permission_scope.ApplicationPermissionScope;

ApplicationPermissionScope.Builder.create(Construct scope, java.lang.String id)
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
    .adminConsentDescription(java.lang.String)
    .adminConsentDisplayName(java.lang.String)
    .applicationId(java.lang.String)
    .scopeId(java.lang.String)
    .value(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApplicationPermissionScopeTimeouts)
//  .type(java.lang.String)
//  .userConsentDescription(java.lang.String)
//  .userConsentDisplayName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.adminConsentDescription">adminConsentDescription</a></code> | <code>java.lang.String</code> | Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.adminConsentDisplayName">adminConsentDisplayName</a></code> | <code>java.lang.String</code> | Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The resource ID of the application to which this permission scope should be applied. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The unique identifier of the permission scope. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | The value that is used for the `scp` claim in OAuth access tokens. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#id ApplicationPermissionScope#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.userConsentDescription">userConsentDescription</a></code> | <code>java.lang.String</code> | Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.userConsentDisplayName">userConsentDisplayName</a></code> | <code>java.lang.String</code> | Display name for the delegated permission that appears in the end user consent experience. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminConsentDescription`<sup>Required</sup> <a name="adminConsentDescription" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.adminConsentDescription"></a>

- *Type:* java.lang.String

Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#admin_consent_description ApplicationPermissionScope#admin_consent_description}

---

##### `adminConsentDisplayName`<sup>Required</sup> <a name="adminConsentDisplayName" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.adminConsentDisplayName"></a>

- *Type:* java.lang.String

Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#admin_consent_display_name ApplicationPermissionScope#admin_consent_display_name}

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

The resource ID of the application to which this permission scope should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#application_id ApplicationPermissionScope#application_id}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.scopeId"></a>

- *Type:* java.lang.String

The unique identifier of the permission scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#scope_id ApplicationPermissionScope#scope_id}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.value"></a>

- *Type:* java.lang.String

The value that is used for the `scp` claim in OAuth access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#value ApplicationPermissionScope#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#id ApplicationPermissionScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#timeouts ApplicationPermissionScope#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#type ApplicationPermissionScope#type}

---

##### `userConsentDescription`<sup>Optional</sup> <a name="userConsentDescription" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.userConsentDescription"></a>

- *Type:* java.lang.String

Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#user_consent_description ApplicationPermissionScope#user_consent_description}

---

##### `userConsentDisplayName`<sup>Optional</sup> <a name="userConsentDisplayName" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.Initializer.parameter.userConsentDisplayName"></a>

- *Type:* java.lang.String

Display name for the delegated permission that appears in the end user consent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#user_consent_display_name ApplicationPermissionScope#user_consent_display_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetUserConsentDescription">resetUserConsentDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetUserConsentDisplayName">resetUserConsentDisplayName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.putTimeouts"></a>

```java
public void putTimeouts(ApplicationPermissionScopeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetType"></a>

```java
public void resetType()
```

##### `resetUserConsentDescription` <a name="resetUserConsentDescription" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetUserConsentDescription"></a>

```java
public void resetUserConsentDescription()
```

##### `resetUserConsentDisplayName` <a name="resetUserConsentDisplayName" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.resetUserConsentDisplayName"></a>

```java
public void resetUserConsentDisplayName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationPermissionScope resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_permission_scope.ApplicationPermissionScope;

ApplicationPermissionScope.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_permission_scope.ApplicationPermissionScope;

ApplicationPermissionScope.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_permission_scope.ApplicationPermissionScope;

ApplicationPermissionScope.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_permission_scope.ApplicationPermissionScope;

ApplicationPermissionScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationPermissionScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApplicationPermissionScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationPermissionScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationPermissionScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationPermissionScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference">ApplicationPermissionScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDescriptionInput">adminConsentDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDisplayNameInput">adminConsentDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.scopeIdInput">scopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDescriptionInput">userConsentDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDisplayNameInput">userConsentDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDescription">adminConsentDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDisplayName">adminConsentDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDescription">userConsentDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDisplayName">userConsentDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.timeouts"></a>

```java
public ApplicationPermissionScopeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference">ApplicationPermissionScopeTimeoutsOutputReference</a>

---

##### `adminConsentDescriptionInput`<sup>Optional</sup> <a name="adminConsentDescriptionInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDescriptionInput"></a>

```java
public java.lang.String getAdminConsentDescriptionInput();
```

- *Type:* java.lang.String

---

##### `adminConsentDisplayNameInput`<sup>Optional</sup> <a name="adminConsentDisplayNameInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDisplayNameInput"></a>

```java
public java.lang.String getAdminConsentDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.scopeIdInput"></a>

```java
public java.lang.String getScopeIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userConsentDescriptionInput`<sup>Optional</sup> <a name="userConsentDescriptionInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDescriptionInput"></a>

```java
public java.lang.String getUserConsentDescriptionInput();
```

- *Type:* java.lang.String

---

##### `userConsentDisplayNameInput`<sup>Optional</sup> <a name="userConsentDisplayNameInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDisplayNameInput"></a>

```java
public java.lang.String getUserConsentDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `adminConsentDescription`<sup>Required</sup> <a name="adminConsentDescription" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDescription"></a>

```java
public java.lang.String getAdminConsentDescription();
```

- *Type:* java.lang.String

---

##### `adminConsentDisplayName`<sup>Required</sup> <a name="adminConsentDisplayName" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.adminConsentDisplayName"></a>

```java
public java.lang.String getAdminConsentDisplayName();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userConsentDescription`<sup>Required</sup> <a name="userConsentDescription" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDescription"></a>

```java
public java.lang.String getUserConsentDescription();
```

- *Type:* java.lang.String

---

##### `userConsentDisplayName`<sup>Required</sup> <a name="userConsentDisplayName" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.userConsentDisplayName"></a>

```java
public java.lang.String getUserConsentDisplayName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScope.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationPermissionScopeConfig <a name="ApplicationPermissionScopeConfig" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_permission_scope.ApplicationPermissionScopeConfig;

ApplicationPermissionScopeConfig.builder()
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
    .adminConsentDescription(java.lang.String)
    .adminConsentDisplayName(java.lang.String)
    .applicationId(java.lang.String)
    .scopeId(java.lang.String)
    .value(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApplicationPermissionScopeTimeouts)
//  .type(java.lang.String)
//  .userConsentDescription(java.lang.String)
//  .userConsentDisplayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.adminConsentDescription">adminConsentDescription</a></code> | <code>java.lang.String</code> | Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.adminConsentDisplayName">adminConsentDisplayName</a></code> | <code>java.lang.String</code> | Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The resource ID of the application to which this permission scope should be applied. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The unique identifier of the permission scope. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.value">value</a></code> | <code>java.lang.String</code> | The value that is used for the `scp` claim in OAuth access tokens. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#id ApplicationPermissionScope#id}. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.type">type</a></code> | <code>java.lang.String</code> | Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.userConsentDescription">userConsentDescription</a></code> | <code>java.lang.String</code> | Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.userConsentDisplayName">userConsentDisplayName</a></code> | <code>java.lang.String</code> | Display name for the delegated permission that appears in the end user consent experience. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminConsentDescription`<sup>Required</sup> <a name="adminConsentDescription" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.adminConsentDescription"></a>

```java
public java.lang.String getAdminConsentDescription();
```

- *Type:* java.lang.String

Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#admin_consent_description ApplicationPermissionScope#admin_consent_description}

---

##### `adminConsentDisplayName`<sup>Required</sup> <a name="adminConsentDisplayName" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.adminConsentDisplayName"></a>

```java
public java.lang.String getAdminConsentDisplayName();
```

- *Type:* java.lang.String

Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#admin_consent_display_name ApplicationPermissionScope#admin_consent_display_name}

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The resource ID of the application to which this permission scope should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#application_id ApplicationPermissionScope#application_id}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

The unique identifier of the permission scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#scope_id ApplicationPermissionScope#scope_id}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value that is used for the `scp` claim in OAuth access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#value ApplicationPermissionScope#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#id ApplicationPermissionScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.timeouts"></a>

```java
public ApplicationPermissionScopeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#timeouts ApplicationPermissionScope#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#type ApplicationPermissionScope#type}

---

##### `userConsentDescription`<sup>Optional</sup> <a name="userConsentDescription" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.userConsentDescription"></a>

```java
public java.lang.String getUserConsentDescription();
```

- *Type:* java.lang.String

Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#user_consent_description ApplicationPermissionScope#user_consent_description}

---

##### `userConsentDisplayName`<sup>Optional</sup> <a name="userConsentDisplayName" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeConfig.property.userConsentDisplayName"></a>

```java
public java.lang.String getUserConsentDisplayName();
```

- *Type:* java.lang.String

Display name for the delegated permission that appears in the end user consent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#user_consent_display_name ApplicationPermissionScope#user_consent_display_name}

---

### ApplicationPermissionScopeTimeouts <a name="ApplicationPermissionScopeTimeouts" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_permission_scope.ApplicationPermissionScopeTimeouts;

ApplicationPermissionScopeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#create ApplicationPermissionScope#create}. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#delete ApplicationPermissionScope#delete}. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#read ApplicationPermissionScope#read}. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#update ApplicationPermissionScope#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#create ApplicationPermissionScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#delete ApplicationPermissionScope#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#read ApplicationPermissionScope#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs/resources/application_permission_scope#update ApplicationPermissionScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationPermissionScopeTimeoutsOutputReference <a name="ApplicationPermissionScopeTimeoutsOutputReference" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.application_permission_scope.ApplicationPermissionScopeTimeoutsOutputReference;

new ApplicationPermissionScopeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azuread.applicationPermissionScope.ApplicationPermissionScopeTimeouts">ApplicationPermissionScopeTimeouts</a>

---



