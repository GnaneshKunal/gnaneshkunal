---
title: Numpy vs. Python Lists
date: "2018-02-05"
---

While I was learning Machine Learning, I made my mind not to use any of the third-party-libraries (including numpy and Pandas) until I got to know what  happened in the background and feel okay to use libraries.
<!-- more -->

<div align="center">
    <br />
  <img src="https://www.dropbox.com/s/dxtooh0s29f0v8u/numpy-python.png?raw=1"><br><br>
</div>


It was a bit harder to write everything from scratch. Even the `dot product` must be written, cause python doesn't have that inbuilt.

Finally, I've felt comfortable and could clearly understand what is happening in the background (cause, Machine Learning is all about Math).

## Implementing Stochastic Gradient Descent

Stochastic gradient descent is actually scanning through the training examples, and then it'll take a little gradient descent step with respect to the cost function of just that training example.

The cost function measures how well the hypothesis is doing on a single example. 

<div align="center">

$$cost( \Theta, (x^{(i)}, y^{(i)})) = \dfrac{1}{2}(h_\Theta(x^{(i)}) - y^{i})^2$$

$$J_{train}(\Theta)  = \dfrac{1}{m} \sum_{i=1}^{m} cost( \Theta, (x^{(i)}, y^{(i)}))$$
</div>

### A dumb Stochastic Gradient Descent Implementation

#### Using Lists:

```python
def dot(v, w):
    return sum(v_i * w_i for v_i, w_i in zip(v, w))

def predict_multi(x_i, beta):
    return dot(x_i, beta)

def error_multi(beta, x, y):
    return y - predict_multi(x, beta)

def stochastic_gradient_descent(x, y, theta, learning_rate=0.001):
    for _ in range(1500):
        for x_i, y_i in zip(x, y):
            i = 0
            for x_ii, theta_i in zip(x_i, theta):
                theta[i] = theta_i - learning_rate * (-error_multi(theta, x_i, y_i)) * x_ii
                i += 1
    return theta
```

So, the benchmark results

```md
%timeit stochastic_gradient_descent(multi_data, daily_minutes_good, theta)
1.85 s ± 21.6 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)
```


#### Using Numpy:
```python
import numpy as np

def stochastic_gradient_descent_np(x, y, theta, learning_rate=0.001):
    for _ in range(1500):
        for x_i, y_i in zip(x, y):
            theta = theta - learning_rate * (np.sum(x_i * theta) - y_i) * x_i
    return theta
```

That's it, boom. The Numpy implementation of Gradient Descent actually uses a vectorized implementation.

Benchmark using Numpy:

```md
%timeit stochastic_gradient_descent_np(np_multi_data, np_daily, np_theta)
1.96 s ± 7.53 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)
```

Using Numpy doesn't just make the implementation simpler but also faster.
