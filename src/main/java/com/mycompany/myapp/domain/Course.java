package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

import com.mycompany.myapp.domain.enumeration.DeliveryState;

import com.mycompany.myapp.domain.enumeration.PaymentMethod;

/**
 * The Course entity.
 */
@ApiModel(description = "The Course entity.")
@Entity
@Table(name = "course")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Course implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "state", nullable = false)
    private DeliveryState state;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "payment_method", nullable = false)
    private PaymentMethod paymentMethod;

    @NotNull
    @Column(name = "estimated_preparation_time", nullable = false)
    private Instant estimatedPreparationTime;

    @NotNull
    @Column(name = "estimated_delivery_time", nullable = false)
    private Instant estimatedDeliveryTime;

    @NotNull
    @Column(name = "preparation_time", nullable = false)
    private Instant preparationTime;

    @NotNull
    @Column(name = "delivery_time", nullable = false)
    private Instant deliveryTime;

    @ManyToOne
    @JsonIgnoreProperties("courses")
    private Restaurant restaurant;

    @ManyToOne
    @JsonIgnoreProperties("courses")
    private UserAccount deliverer;

    @ManyToOne
    @JsonIgnoreProperties("courses")
    private UserAccount customer;

    @OneToOne(mappedBy = "orderId")
    @JsonIgnore
    private Basket basketId;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public DeliveryState getState() {
        return state;
    }

    public Course state(DeliveryState state) {
        this.state = state;
        return this;
    }

    public void setState(DeliveryState state) {
        this.state = state;
    }

    public PaymentMethod getPaymentMethod() {
        return paymentMethod;
    }

    public Course paymentMethod(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }

    public void setPaymentMethod(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public Instant getEstimatedPreparationTime() {
        return estimatedPreparationTime;
    }

    public Course estimatedPreparationTime(Instant estimatedPreparationTime) {
        this.estimatedPreparationTime = estimatedPreparationTime;
        return this;
    }

    public void setEstimatedPreparationTime(Instant estimatedPreparationTime) {
        this.estimatedPreparationTime = estimatedPreparationTime;
    }

    public Instant getEstimatedDeliveryTime() {
        return estimatedDeliveryTime;
    }

    public Course estimatedDeliveryTime(Instant estimatedDeliveryTime) {
        this.estimatedDeliveryTime = estimatedDeliveryTime;
        return this;
    }

    public void setEstimatedDeliveryTime(Instant estimatedDeliveryTime) {
        this.estimatedDeliveryTime = estimatedDeliveryTime;
    }

    public Instant getPreparationTime() {
        return preparationTime;
    }

    public Course preparationTime(Instant preparationTime) {
        this.preparationTime = preparationTime;
        return this;
    }

    public void setPreparationTime(Instant preparationTime) {
        this.preparationTime = preparationTime;
    }

    public Instant getDeliveryTime() {
        return deliveryTime;
    }

    public Course deliveryTime(Instant deliveryTime) {
        this.deliveryTime = deliveryTime;
        return this;
    }

    public void setDeliveryTime(Instant deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public Course restaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
        return this;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public UserAccount getDeliverer() {
        return deliverer;
    }

    public Course deliverer(UserAccount userAccount) {
        this.deliverer = userAccount;
        return this;
    }

    public void setDeliverer(UserAccount userAccount) {
        this.deliverer = userAccount;
    }

    public UserAccount getCustomer() {
        return customer;
    }

    public Course customer(UserAccount userAccount) {
        this.customer = userAccount;
        return this;
    }

    public void setCustomer(UserAccount userAccount) {
        this.customer = userAccount;
    }

    public Basket getBasketId() {
        return basketId;
    }

    public Course basketId(Basket basket) {
        this.basketId = basket;
        return this;
    }

    public void setBasketId(Basket basket) {
        this.basketId = basket;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Course)) {
            return false;
        }
        return id != null && id.equals(((Course) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Course{" +
            "id=" + getId() +
            ", state='" + getState() + "'" +
            ", paymentMethod='" + getPaymentMethod() + "'" +
            ", estimatedPreparationTime='" + getEstimatedPreparationTime() + "'" +
            ", estimatedDeliveryTime='" + getEstimatedDeliveryTime() + "'" +
            ", preparationTime='" + getPreparationTime() + "'" +
            ", deliveryTime='" + getDeliveryTime() + "'" +
            "}";
    }
}
