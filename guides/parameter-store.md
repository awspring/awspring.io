# Configuration with AWS Parameter Store

Spring Cloud AWS Parameter Store implementation, provides the ability to populate Spring's `Environment` with properties defined in [Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html).

## Create properties in Parameter Store

Parameters can be created through AWS Console, infrastructure as code solution like Terraform or AWS CDK, or with command line. This guide uses command line interface to AWS, so before you start make sure you have [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html) installed.

Parameter Store uses [hierarchies](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-hierarchies.html) to organize configuration parameters. Spring Cloud AWS does not enforce any specific way parameters should be organized - it loads all parameters that name starts with a prefix configured in Spring configuration.

In this guide, we will assume that all parameters starting with prefix `/config/spring/` belong to our application - later in this guide you'll find where exactly it is configured.

Create parameters in Parameter Store with AWS CLI:

```bash
$ aws ssm put-parameter \
    --name "/config/spring/host" \
    --type "String" \
    --value "http://some-host.net"
```
   
```bash 
$ aws ssm put-parameter \
    --name "/config/spring/port" \
    --type "String" \
    --value "8888"
```

## Create new Spring Boot application

1. Go to https://start.spring.io. This service pulls in all the dependencies you need for an application and does most of the setup for you.
2. Choose either Gradle or Maven and the language you want to use. This guide assumes that you chose Java.
3. Click Generate.

Download the resulting ZIP file, extract it, and open in IDE of your choice.

## Add dependencies

First configure dependency management, to make sure that all Spring Cloud AWS and AWS SDK dependencies are compatible and you don't need to manage versions manually:

In Maven:

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>io.awspring.cloud</groupId>
            <artifactId>spring-cloud-aws-dependencies</artifactId>
            <version>3.0.3</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

In Gradle:

```groovy
dependencies {
  implementation platform("io.awspring.cloud:spring-cloud-aws-dependencies:3.0.3")
}
```

Next, add the dependency to Parameter Store starter:

In Maven:

```xml
<dependency>
    <groupId>io.awspring.cloud</groupId>
    <artifactId>spring-cloud-aws-starter-parameter-store</artifactId>
</dependency>
```

In Gradle:

```groovy
implementation 'io.awspring.cloud:spring-cloud-aws-starter-parameter-store'
```

## Configure Spring Boot

In `application.properties` or `application.yml`, add `spring.config.import` entry pointing to properties in Parameter Store:

```properties
spring.config.import=aws-parameterstore:/config/spring/
```

Once this entry is added, all properties where name starts with `/config/spring/` are added to Spring `Environment`

## Use parameters in Spring Boot configuration

Parameters now can be used in `application.properties` or `application.yml`:

```properties
client.host=${host}
client.port=${port}
```

## Use parameters in Java code

Properties values can be also referenced with `@Value` annotation or through `Environment#getProperty` method:

```java
@Service
class MyService {

    @Value("${host}") 
    private String host;
}
```

## Read more

This was just a glympse of what Spring Cloud AWS can do. For more details about Parameter Store integration go to the [reference documentation](https://docs.awspring.io/spring-cloud-aws/docs/3.0.3/reference/html/index.html#spring-cloud-aws-parameter-store).
