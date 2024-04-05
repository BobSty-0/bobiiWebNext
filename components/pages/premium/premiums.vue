<style lang="css" scoped>
@import "/css/components/pages/premium/premiums.css";
</style>

<template>
    <section class="premium-buy-section">
        <premium :id="idLifetime" :caption="captionLifetime" :price="priceLifetime"
            :priceSubtitle="priceSubtitleLifetime" :benefit1="benefit1Lifetime" :benefit2="benefit2Lifetime"
            :buttonLink="buttonLinkLifetime" :buttonText="buttonTextLifetime" />
        <premium :id="idYearly" :caption="capitonYearly" :price="priceYearly" :priceSubtitle="priceSubtitleYearly"
            :benefit1="benefit1Yearly" :benefit2="benefit2Yearly" :buttonLink="buttonLinkYearly"
            :buttonText="buttonTextYearly" />
        <premium :id="idMonthly" :caption="capitonMonthly" :price="priceMonthly" :priceSubtitle="priceSubtitleMonthly"
            :benefit1="benefit1Monthly" :benefit2="benefit2Monthly" :buttonLink="buttonLinkMonthly"
            :buttonText="buttonTextMonthly" />
    </section>
</template>

<script>
import premium from '/components/pages/premium/premium.vue'
export default {
    components: {
        premium
    },
    data() {
        return {
            idLifetime: 'lifetime',
            idYearly: 'yearly',
            idMonthly: 'monthly',

            captionLifetime: 'Lifetime',
            capitonYearly: 'Yearly',
            capitonMonthly: 'Monthly',

            priceLifetime: '24.99€',
            priceYearly: '0.99€',
            priceMonthly: '1.29€',

            priceSubtitleLifetime: 'EUR / lifetime, paid only once',
            priceSubtitleYearly: 'EUR / month, 11,88€ billed every year',
            priceSubtitleMonthly: 'EUR / month, 1.29€ billed every month',

            benefit1Lifetime: ' No more Adds',
            benefit1Yearly: ' No more Adds',
            benefit1Monthly: ' No more Adds',

            benefit2Lifetime: ' 1 Server',
            benefit2Yearly: ' 1 Server',
            benefit2Monthly: ' 1 Server',

            buttonLinkLifetime: '#',
            buttonLinkYearly: '#',
            buttonLinkMonthly: '#',

            buttonTextLifetime: 'Get your Lifetime plan',
            buttonTextYearly: 'Get your Yearly plan',
            buttonTextMonthly: 'Get your Monthly plan'
        };
    }
};
</script>